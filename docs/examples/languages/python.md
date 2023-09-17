---
sidebar_position: 8
title: Python
---


## Running the pre-built Python pipeline directly

Run the following command to run the pre-built [Python pipeline](https://github.com/fluent-ci-templates/python-pipeline) without having to initialize a project:

```bash
fluentci run python_pipeline
```

## Add Python Pipeline to your project

Run the following command to add Python pipeline to your project:

```bash
fluentci init -t python
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
fluentci run .
```

Or simply:

```bash
fluentci
```

## Environment variables

| Variable         | Description                                          | Default       |
| ---------------- | ------------------------------------------------------| ------------- |
|`PACKAGE_MANAGER` | The package manager to use (`poetry`, `pip`, `pipenv`) | `poetry`      |

## Jobs

| Job       | Description              |
| --------- | ------------------------ |
| test      | Run tests (using pytest) |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "https://sdk.fluentci.io/v0.1.7/mod.ts";
import { test } from "https://pkg.fluentci.io/python_pipeline@v0.3.0/mod.ts";

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await test(client, src);
  });
}

pipeline();
```
