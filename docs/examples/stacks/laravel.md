---
sidebar_position: 3
title: Laravel
---

## Running the pre-built Laravel pipeline directly

Run the following command to run the pre-built [Laravel pipeline](https://github.com/fluent-ci-templates/laravel-pipeline) without having to initialize a project:

```bash
fluentci run laravel_pipeline
```

## Add Laravel Pipeline to your project

Run the following command to add a Laravel pipeline to your project:

```bash
fluentci init -t laravel
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
fluentci run .
```

## Environment variables

| Variable               | Description                                | Default Value |
| ---------------------- | ------------------------------------------ | ------------- |
|`MARIADB_USER`          | The username for the MariaDB database      | `user`        |
|`MARIADB_PASSWORD`      | The password for the MariaDB database      | `password`    |
|`MARIADB_ROOT_PASSWORD` | The root password for the MariaDB database | `root`        |


## Jobs

| Job       | Description   |
| --------- | ------------- |
| test      | Run tests      |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "https://sdk.fluentci.io/v0.1.7/mod.ts";
import { test } from "https://pkg.fluentci.io/laravel_pipeline@v0.5.0/mod.ts";

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await test();
  });
}

pipeline();
```