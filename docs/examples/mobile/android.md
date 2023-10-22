---
sidebar_position: 1
title: Android
---

## Running the pre-built Android pipeline directly

Run the following command to run the pre-built [Android pipeline](https://github.com/fluent-ci-templates/android-pipeline) without having to initialize a project:

```bash
fluentci run android_pipeline
```

## Add Android Pipeline to your project

Run the following command to add Android pipeline to your project:

```bash
fluentci init -t android
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
fluentci run .
```


## Jobs

| Job            | Description           |
| -------------- | --------------------- |
| lintDebug      | Lint your code        |
| assembleDebug  | generate apk (debug)  |
| debugTests     | Run your tests        |
| assembleRelease| generate apk (release)|
| bundleRelease  | generate aab (release)|

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import { lintDebug, assembleDebug, debugTests } from "https://pkg.fluentci.io/android_pipeline@v0.7.0/mod.ts";


await lintDebug();
await assembleDebug();
await debugTests();
```
