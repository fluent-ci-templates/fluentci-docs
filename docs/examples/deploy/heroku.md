---
sidebar_position: 6
title: Heroku
---


Run the following command to run the pre-built [Heroku Pipeline](https://github.com/fluent-ci-templates/heroku-pipeline) in your project to deploy your application to [Heroku](https://www.heroku.com):

```bash
dagger run fluentci heroku_pipeline deploy
```

## Environment variables

| Variable        | Description         |
|-----------------|---------------------|
| HEROKU_API_KEY  | Your Heroku API Key |
| HEROKU_APP_NAME | Your Heroku App     |

## Jobs

| Job     | Description                       |
|---------|-----------------------------------|
| deploy  | Deploys your application to Heroku. |

## Programmatic usage

You can also use this pipeline programmatically:

```typescript
import { Client, connect } from "https://esm.sh/@dagger.io/dagger@0.8.1";
import { Dagger } from "https://deno.land/x/heroku_pipeline/mod.ts";

const { deploy } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await deploy(client, src);
  });
}

pipeline();

```
