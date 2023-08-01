---
sidebar_position: 2
title: Fastlane
---

## Running the pre-built Fastlane pipeline directly

Run the following command to run the pre-built [Fastlane pipeline](https://github.com/fluent-ci-templates/fastlane-pipeline) without having to initialize a project:

```bash
dagger run fluentci fastlane_pipeline
```

## Add Deno Pipeline to your project

Run the following command to add Fastlane pipeline to your project:

```bash
fluentci init -t fastlane
```


## Jobs

| Job                          | Description                            |
| --------------------------- | --------------------------------------- |
| buildRelease                | generate apk (release)                  |
| internalDistribute          | distribute to internal testers          |
| alphaDistribute             | distribute to alpha testers             |
| betaDistribute              | distribute to beta testers              |
| productionDistribute        | distribute to production testers        |
| promoteAlphaToBeta          | promote alpha to beta                   |
| promoteBetaToProduction     | promote beta to production              |
| promoteAlphaToProduction    | promote alpha to production             |
| promoteInternalToAlpha      | promote internal to alpha               |
| promoteInternalToBeta       | promote internal to beta                |
| promoteInternalToProduction | promote internal to production          |
| firebaseAppDistribution     | distribute to firebase app distribution |
| appCenterDistribute         | distribute to app center                |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "@dagger.io/dagger";
import { Dagger } from "https://deno.land/x/fastlane_pipeline/mod.ts";

const { buildRelease } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await buildRelease(client, src);
  });
}

pipeline();
```


This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
dagger run fluentci .
```