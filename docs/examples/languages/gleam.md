---
sidebar_position: 4
title: Gleam
---


## Running the pre-built Gleam pipeline directly

Run the following command to run the pre-built [Gleam pipeline](https://github.com/fluent-ci-templates/gleam-pipeline) without having to initialize a project:

```bash
fluentci run gleam_pipeline
```

## Add gleam Pipeline to your project

Run the following command to add gleam pipeline to your project:

```bash
fluentci init -t gleam
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

| Job   | Description      |
| ----- | ---------------- |
| test  | Run your tests   |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "https://esm.sh/@dagger.io/dagger@0.8.1";
import { Dagger } from "https://pkg.fluentci.io/gleam_pipeline/mod.ts";

const { test } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await test(client, src);
  });
}

pipeline();
```
