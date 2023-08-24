---
sidebar_position: 1
title: Bun
---

## Running the pre-built Bun pipeline directly

Run the following command to run the pre-built [Bun Pipeline](https://github.com/fluent-ci-templates/bun-pipeline) without having to initialize a project:

```bash
fluentci run bun_pipeline
```

## Add Bun Pipeline to your project

Run the following command to add Bun pipeline to your project:

```bash
fluentci init -t bun
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
dagger run fluentci .
```

Or simply:

```bash
fluentci
```

## Jobs

| Job    | Description           |
| ------ | --------------------- |
| test   | Run your tests        |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "@dagger.io/dagger";
import { Dagger } from "https://deno.land/x/bun_pipeline/mod.ts";

const { test } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await test(client, src);
  });
}

pipeline();
```
