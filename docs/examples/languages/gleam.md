---
sidebar_position: 5
title: Gleam
---


## Running the pre-built Gleam pipeline directly

Run the following command to run the pre-built [Gleam Pipeline](https://github.com/fluent-ci-templates/gleam-pipeline) without having to initialize a project:

```bash
fluentci run gleam_pipeline
```

## Add gleam Pipeline to your project

Run the following command to add Gleam pipeline to your project:

```bash
fluentci init -t gleam
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
fluentci run .
```

Or simply:

```bash
fluentci
```

## Jobs

| Job    | Description         |
| ------ | ------------------- |
| check  | Run type checking   |
| format | Format source code  |
| test   | Run the tests       |
| build  | Build the project   |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import { check, format, test, build } from "https://pkg.fluentci.io/gleam_pipeline@v0.4.0/mod.ts";

await check();
await format();
await test();
await build();
```
