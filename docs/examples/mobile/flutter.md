---
sidebar_position: 3
title: Flutter
---

## Running the pre-built Flutter pipeline directly

Run the following command to run the pre-built [Flutter pipeline](https://github.com/fluent-ci-templates/flutter-pipeline) without having to initialize a project:

```bash
fluentci run flutter_pipeline
```

## Add Flutter Pipeline to your project

Run the following command to add Flutter pipeline to your project:

```bash
fluentci init -t flutter
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
fluentci run .
```

Or simply just run:

```bash
fluentci
```
## Environment variables

| Variable            | Description            | Default  |
| ------------------- | ---------------------- | -------- |
| `FLUTTER_VERSION`   | Flutter version to use | `3.13.1` |
| `BUILD_OUTPUT_TYPE` | Build output type (`aar`, `apk`, `appbundle`, `bundle`, `linux`, `web`)      | `apk`    |


## Jobs

| Job          | Description             |
| ------------ | ----------------------- |
| codeQuality  | Run code quality checks |
| test         | Run tests               |
| build        | Build release           |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import { codeQuality, test, build } from "jsr:@fluentci/flutter";

await codeQuality();
await test();
await build();
```
