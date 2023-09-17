---
sidebar_position: 10
title: Rust
---

## Running the pre-built Rust pipeline directly

Run the following command to run the pre-built [Rust pipeline](https://github.com/fluent-ci-templates/rust-pipeline) without having to initialize a project:

```bash
fluentci run rust_pipeline
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
import Client, { connect } from "https://sdk.fluentci.io/v0.1.7/mod.ts";
import { build, test } from "https://pkg.fluentci.io/rust_pipeline@v0.5.0/mod.ts";

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await test(client, src);
    await build(client, src);
  });
}

pipeline();
```
