---
sidebar_position: 1
title: Deno
---

## Running the pre-built Deno pipeline directly

Run the following command to run the pre-built [Deno pipeline](https://github.com/fluent-ci-templates/deno-pipeline) without having to initialize a project:

```bash
dagger run fluentci deno_pipeline
```

## Add Deno Pipeline to your project

Run the following command to add Deno pipeline to your project:

```bash
fluentci init -t deno
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
dagger run fluentci .
```

## Jobs

| Job   | Description      |
| ----- | ---------------- |
| fmt   | Format your code |
| lint  | Lint your code   |
| test  | Run your tests   |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "@dagger.io/dagger";
import { Dagger } from "https://deno.land/x/deno_pipeline/mod.ts";

const { fmt, lint, test } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await fmt(client, src);
    await lint(client, src);
    await test(client, src);
  });
}

pipeline();
```
