---
sidebar_position: 2
title: Elixir
---

## Running the pre-built Elixir pipeline directly

Run the following command to run the pre-built [Elixir pipeline](https://github.com/fluent-ci-templates/elixir-pipeline) without having to initialize a project:

```bash
dagger run fluentci elixir_pipeline
```

## Add Elixir Pipeline to your project

Run the following command to add Elixir pipeline to your project:

```bash
fluentci init -t elixir
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
dagger run fluentci .
```

## Jobs

| Job   | Description      |
| ----- | ---------------- |
| test  | Run your tests   |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "@dagger.io/dagger";
import { Dagger } from "https://deno.land/x/elixir_pipeline/mod.ts";

const { test } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await test(client, src);
  });
}

pipeline();
```
