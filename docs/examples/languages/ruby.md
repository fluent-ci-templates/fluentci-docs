---
sidebar_position: 9
title: Ruby
---

## Running the pre-built Ruby pipeline directly

Run the following command to run the pre-built [Ruby pipeline](https://github.com/fluent-ci-templates/ruby-pipeline) without having to initialize a project:

```bash
fluentci run ruby_pipeline
```

## Add Ruby Pipeline to your project

Run the following command to add Ruby pipeline to your project:

```bash
fluentci init -t ruby
```

This will create a `.fluentci` directory in your project, feel free to customize the pipeline for your needs.
You can then run the following command to start the pipeline:

```bash
dagger run fluentci .
```

## Environment variables

| Variable               | Description                             |
| ---------------------- | --------------------------------------- |
|  HEROKU_APP_NAME       | The name of the Heroku app to deploy to |
|  HEROKU_PRODUCTION_KEY | The API key to use to deploy to Heroku  |

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
import Client, { connect } from "https://sdk.fluentci.io/v0.1.7/mod.ts";
import { rubocop, rails, rspec } from "https://pkg.fluentci.io/ruby_pipeline@v0.6.3/mod.ts";


function pipeline(src = ".") {
  connect(async (client: Client) => {
    await rubocop(client, src);
    await rails(client, src);
    await rspec(client, src);
  });
}

pipeline();
```
