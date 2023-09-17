---
sidebar_position: 1
title: Django
---

## Running the pre-built Django pipeline directly

Run the following command to run the pre-built [Django pipeline](https://github.com/fluent-ci-templates/django-pipeline) without having to initialize a project:

```bash
fluentci run django_pipeline
```

## Add Django Pipeline to your project

Run the following command to add a Django pipeline to your project:

```bash
fluentci init -t django
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
fluentci run .
```


## Jobs

| Job         | Description      |
| ----------- | ---------------- |
| djangoTests | Run your tests   |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "https://sdk.fluentci.io/v0.1.7/mod.ts";
import { djangoTests } from "https://pkg.fluentci.io/django_pipeline@v0.5.0/mod.ts";

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await djangoTests(client, src);
  });
}

pipeline();
```
