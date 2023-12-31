---
sidebar_position: 3
title: Deno
---

## Running the pre-built Deno pipeline directly

Run the following command to run the pre-built [Deno pipeline](https://github.com/fluent-ci-templates/deno-pipeline) without having to initialize a project:

```bash
fluentci run deno_pipeline
```

## Add Deno Pipeline to your project

Run the following command to add Deno pipeline to your project:

```bash
fluentci init -t deno
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
fluentci run .
```

## Environment variables (Deno Deploy)

| Variable          | Description               | Default    |
| ----------------- | ------------------------- | ---------- |
| DENO_PROJECT      | Your project name         |            |
| NO_STATIC         | Disable static assets     | `false`    |
| EXCLUDE           | Exclude files from deploy |            |
| DENO_DEPLOY_TOKEN | Your Deno Deploy token    |            |
| DENO_MAIN_SCRIPT  | Your main script          | `main.tsx` |

## Jobs

| Job    | Description           |
| ------ | --------------------- |
| fmt    | Format your code      |
| lint   | Lint your code        |
| test   | Run your tests        |
| deploy | Deploy to Deno Deploy |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import { fmt, lint, test } from "https://deno.land/x/deno_pipeline/mod.ts";

await fmt();
await lint();
await test();

```
