---
sidebar_position: 1
title: Android
---

## Running the pre-built Android pipeline directly

Run the following command to run the pre-built [Android pipeline](https://github.com/fluent-ci-templates/android-pipeline) without having to initialize a project:

```bash
dagger run fluentci android_pipeline
```

## Add Android Pipeline to your project

Run the following command to add Android pipeline to your project:

```bash
fluentci init -t android
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
dagger run fluentci .
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
import Client, { connect } from "@dagger.io/dagger";
import { Dagger } from "https://deno.land/x/android_pipeline/mod.ts";

const { lintDebug, assembleDebug, debugTests } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await lintDebug(client, src);
    await assembleDebug(client, src);
    await debugTests(client, src);
  });
}

pipeline();
```
