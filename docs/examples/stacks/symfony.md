---
sidebar_position: 3
title: Symfony
---

## Running the pre-built Symfony pipeline directly

Run the following command to run the pre-built [Symfony pipeline](https://github.com/fluent-ci-templates/symfony-pipeline) without having to initialize a project:

```bash
dagger run fluentci symfony_pipeline
```

## Add Symfony Pipeline to your project

Run the following command to add a Symfony pipeline to your project:

```bash
fluentci init -t symfony
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
dagger run fluentci .
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
import Client, { connect } from "@dagger.io/dagger";
import { Dagger } from "https://deno.land/x/symfony_pipeline/mod.ts";

const { phpcs,
  phpstan,
  twigLint,
  xliffLint,
  yamlLint,
  doctrineLint,
  containerLint,
  phpUnit 
} = Dagger;

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