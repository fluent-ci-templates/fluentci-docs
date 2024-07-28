---
sidebar_position: 2
title: Fastlane
---

## Running the pre-built Fastlane pipeline directly

Run the following command to run the pre-built [Fastlane pipeline](https://github.com/fluent-ci-templates/fastlane-pipeline) without having to initialize a project:

```bash
fluentci run fastlane_pipeline
```

## Add Fastlane Pipeline to your project

Run the following command to add Fastlane pipeline to your project:

```bash
fluentci init -t fastlane
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
fluentci run .
```

## Jobs

| Job      | Description              |
| -------- | ------------------------ |
| execLane | Executes a Fastlane lane |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import { execLane } from "jsr:@fluentci/fastlane";

await execLane("buildRelease");
```

