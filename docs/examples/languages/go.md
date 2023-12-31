---
sidebar_position: 6
title: Go
---

## Running the pre-built Go pipeline directly

Run the following command to run the pre-built [Go pipeline](https://github.com/fluent-ci-templates/go-pipeline) without having to initialize a project:

```bash
fluentci run deno_pipeline
```

## Add Deno Pipeline to your project

Run the following command to add Go pipeline to your project:

```bash
fluentci init -t go
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
fluentci run .
```

## Jobs

| Job   | Description        |
| ----- | ------------------ |
| fmt   | Format your code   |
| test  | Run your tests     |
| build | Build your project |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import { fmt, test, build } from "https://pkg.fluentci.io/go_pipeline@v0.6.0/mod.ts";

await fmt();
await test();
await build();
```
