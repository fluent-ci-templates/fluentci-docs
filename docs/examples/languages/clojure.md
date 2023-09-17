---
sidebar_position: 2
title: Clojure
---

## Running the pre-built Clojure pipeline directly

Run the following command to run the pre-built [Clojure pipeline](https://github.com/fluent-ci-templates/clojure-pipeline) without having to initialize a project:

```bash
fluentci run clojure_pipeline
```

## Add Clojure Pipeline to your project

Run the following command to add Clojure pipeline to your project:

```bash
fluentci init -t clojure
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
fluentci run .
```

## Jobs

| Job     | Description           |
| ------- | --------------------- |
| test    | Run your tests        |
| uberjar | Build an uberjar      |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "https://sdk.fluentci.io/v0.1.4/mod.ts";
import { test, uberjar } from "https://pkg.fluentci.io/clojure_pipeline@v0.3.0/mod.ts";

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await test(client, src);
    await uberjar(client, src);
  });
}

pipeline();
```
