---
sidebar_position: 4
title: Symfony
---

## Running the pre-built Symfony pipeline directly

Run the following command to run the pre-built [Symfony pipeline](https://github.com/fluent-ci-templates/symfony-pipeline) without having to initialize a project:

```bash
fluentci run symfony_pipeline
```

## Add Symfony Pipeline to your project

Run the following command to add a Symfony pipeline to your project:

```bash
fluentci init -t symfony
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
fluentci run .
```


## Jobs

| Job          | Description                  |
| ------------ | ---------------------------- |
| phpstan      | Run PHPStan                  |
| phpcs        | Run PHPCS                    |
| twigLint     | Lint Twig templates          |
| xliffLint    | Lint XLIFF translations      |
| yamlLint     | Lint YAML files              |
| doctrineLint | Lint Doctrine entities       |
| containerLint| Lint Parameters and Services |
| phpUnit      | Run PHPUnit                  | 

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "https://sdk.fluentci.io/v0.1.7/mod.ts";
import { 
  phpcs,
  phpstan,
  twigLint,
  xliffLint,
  yamlLint,
  doctrineLint,
  containerLint,
  phpUnit,
 } from "https://pkg.fluentci.io/symfony_pipeline@v0.5.1/mod.ts";

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await phpcs(client, src);
    await phpstan(client, src);
    await twigLint(client, src);
    await xliffLint(client, src);
    await yamlLint(client, src);
    await doctrineLint(client, src);
    await containerLint(client, src);
    await phpUnit(client, src);
  });
}

pipeline();
```