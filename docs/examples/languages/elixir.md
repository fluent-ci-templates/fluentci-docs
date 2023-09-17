---
sidebar_position: 4
title: Elixir
---

## Running the pre-built Elixir pipeline directly

Run the following command to run the pre-built [Elixir pipeline](https://github.com/fluent-ci-templates/elixir-pipeline) without having to initialize a project:

```bash
fluentci run elixir_pipeline
```

## Add Elixir Pipeline to your project

Run the following command to add Elixir pipeline to your project:

```bash
fluentci init -t elixir
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
fluentci run .
```

## Jobs

| Job   | Description      |
| ----- | ---------------- |
| test  | Run your tests   |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "https://sdk.fluentci.io/v0.1.7/mod.ts";
import { test } from "https://pkg.fluentci.io/elixir_pipeline@v0.5.3/mod.ts";

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await test(client, src);
  });
}

pipeline();
```
