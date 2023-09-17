---
sidebar_position: 11
title: Zig
---

## Running the pre-built zig pipeline directly

Run the following command to run the pre-built [Zig pipeline](https://github.com/fluent-ci-templates/zig-pipeline) without having to initialize a project:

```bash
fluentci run zig_pipeline
```

## Add Zig Pipeline to your project

Run the following command to add Zig pipeline to your project:

```bash
fluentci init -t zig
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
fluentci run .
```
## Environment variables

| Variable        | Description                                    |
| --------------- | ---------------------------------------------- |
| `ZIG_VERSION`   | The version of Zig to use. Defaults to `0.10.1` |

## Jobs

| Job   | Description        |
| ----- | ------------------ |
| build | build your project |
| test  | Run your tests     |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "https://sdk.fluentci.io/v0.1.7/mod.ts";
import { test, build } from "https://pkg.fluentci.io/zig_pipeline@v0.2.0/mod.ts";

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await test(client, src);
    await build(client, src);
  });
}

pipeline();
```
