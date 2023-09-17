---
sidebar_position: 2
title: Fastlane
---

## Running the pre-built Fastlane pipeline directly

Run the following command to run the pre-built [Fastlane pipeline](https://github.com/fluent-ci-templates/fastlane-pipeline) without having to initialize a project:

```bash
fluentci run fastlane_pipeline
```

## Add Deno Pipeline to your project

Run the following command to add Fastlane pipeline to your project:

```bash
fluentci init -t fastlane
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
dagger run fluentci .
```

## Jobs

| Job      | Description              |
| -------- | ------------------------ |
| execLane | Executes a Fastlane lane |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "https://sdk.fluentci.io/v0.1.7/mod.ts";
import { execLane } from "https://pkg.fluentci.io/fastlane_pipeline@v0.6.2/mod.ts";

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await execLane(client, "buildRelease", src);
  });
}

pipeline();
```

