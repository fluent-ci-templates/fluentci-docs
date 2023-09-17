---
sidebar_position: 6
title: Node.js
---

## Running the pre-built Node.js pipeline directly

Run the following command to run the pre-built [Node.js Pipeline](https://github.com/fluent-ci-templates/nodejs-pipeline) without having to initialize a project:

```bash
fluentci run nodejs_pipeline
```

## Add Bun Pipeline to your project

Run the following command to add Bun pipeline to your project:

```bash
fluentci init -t nodejs
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

## Environment variables

| Variable          | Description                                | Default    |
| ----------------- | ------------------------------------------ | ---------- |
| NODE_VERSION      | Node version to use                        |  18.16.1   |
| PACKAGE_MANAGER   | Package manager to use (npm, yarn, pnpm)   |  npm       |

## Jobs

| Job    | Description         |
| ------ | ------------------- |
| test   | Run the tests       |
| build  | Build the project   |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "https://sdk.fluentci.io/v0.1.7/mod.ts";
import { test, build } from "https://pkg.fluentci.io/nodejs_pipeline@v0.3.2/mod.ts";

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await test(client, src);
    await build(client, src);
  });
}

pipeline();
```
