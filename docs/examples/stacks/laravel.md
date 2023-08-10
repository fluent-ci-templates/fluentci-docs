---
sidebar_position: 3
title: Laravel
---

## Running the pre-built Laravel pipeline directly

Run the following command to run the pre-built [Laravel pipeline](https://github.com/fluent-ci-templates/laravel-pipeline) without having to initialize a project:

```bash
dagger run fluentci laravel_pipeline
```

## Add Laravel Pipeline to your project

Run the following command to add a Laravel pipeline to your project:

```bash
fluentci init -t laravel
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
dagger run fluentci .
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
import { Client, connect } from "https://esm.sh/@dagger.io/dagger@0.8.1";
import { Dagger } from "https://deno.land/x/laravel_pipeline/mod.ts";

const { test } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await test(client, src);
  });
}

pipeline();
```