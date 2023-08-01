---
sidebar_position: 6
title: Ruby
---

## Running the pre-built Ruby pipeline directly

Run the following command to run the pre-built [Ruby pipeline](https://github.com/fluent-ci-templates/ruby-pipeline) without having to initialize a project:

```bash
dagger run fluentci ruby_pipeline
```

## Add Ruby Pipeline to your project

Run the following command to add a Ruby pipeline to your project:

```bash
fluentci init -t ruby
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
dagger run fluentci .
```


## Jobs

| Job          | Description      |
| ------------ | ---------------- |
| rubocop      | Runs Rubocop     |
| rails        | Runs Rails tests |
| rspec        | Runs RSpec tests |
| herokuDeploy | Deploys to Heroku |
## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "@dagger.io/dagger";
import { Dagger } from "https://deno.land/x/ruby_pipeline/mod.ts";

const { rubocop, rails, rspec, herokuDeploy } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await rubocop(client, src);
    await rails(client, src);
    await rspec(client, src);
    await herokuDeploy(client, src);
  });
}

pipeline();
```
