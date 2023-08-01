---
sidebar_position: 8
title: Rust
---

## Running the pre-built Rust pipeline directly

Run the following command to run the pre-built [Rust pipeline](https://github.com/fluent-ci-templates/rust-pipeline) without having to initialize a project:

```bash
dagger run fluentci rust_pipeline
```

## Add Rust Pipeline to your project

Run the following command to add Rust pipeline to your project:

```bash
fluentci init -t rust
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
dagger run fluentci .
```


## Jobs

| Job   | Description        |
| ----- | ------------------ |
| build | build your project |
| test  | Run your tests     |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "@dagger.io/dagger";
import { Dagger } from "https://deno.land/x/rust_pipeline/mod.ts";

const { build, test } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await test(client, src);
    await build(client, src);
  });
}

pipeline();
```
