---
sidebar_position: 8
title: Railway
---


Run the following command to run the pre-built [Railway Pipeline](https://github.com/fluent-ci-templates/railway-pipeline) in your project to deploy your application to [Railway](https://railway.app):

```bash
dagger run fluentci railway_pipeline deploy
```

## Environment variables

| Variable      | Description        |
| --------------| -------------------|
| RAILWAY_TOKEN | Your Railway Token |

## Jobs

| Job     | Description                      |
|---------|----------------------------------|
| deploy  | Deploys your application to Railway. |

## Programmatic usage

You can also use this pipeline programmatically:

```typescript
import { Client, connect } from "https://esm.sh/@dagger.io/dagger@0.8.1";
import { Dagger } from "https://deno.land/x/railway_pipeline/mod.ts";

const { deploy } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await deploy(client, src);
  });
}

pipeline();

```