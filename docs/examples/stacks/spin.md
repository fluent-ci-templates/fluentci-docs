---
sidebar_position: 3
title: Spin
---


## Running the pre-built Spin pipeline directly

Run the following command to run the pre-built [Spin pipeline](https://github.com/fluent-ci-templates/spin-pipeline) without having to initialize a project:

```bash
fluentci run spin_pipeline
```

## Add Spin Pipeline to your project

Run the following command to add a Spin pipeline to your project:

```bash
fluentci init -t spin
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
fluentci run .
```

## Environment Variables

| Variable        | Description                      |
|-----------------|----------------------------------|
| SPIN_AUTH_TOKEN | Your Fermyon Cloud Access Token. |


## Jobs

| Job     | Description                                                         |
|---------|---------------------------------------------------------------------|
| build   | Build your Spin application (Only Rust is supported at the moment). |
| deploy  | Deploy your Spin application to Fermyon Platform.                   |

## Programmatic usage

You can also use this pipeline programmatically:

```typescript
import Client, { connect } from "https://sdk.fluentci.io/v0.1.7/mod.ts";
import { build, deploy } from "https://pkg.fluentci.io/spin_pipeline@v0.5.0/mod.ts";

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await build();
    await deploy();
  });
}

pipeline();
```