---
sidebar_position: 5
title: Fly
---


Run the following command to run the pre-built [Fly Pipeline](https://github.com/fluent-ci-templates/fly-pipeline) in your project to deploy your application to [fly.io](https://fly.io):

```bash
fluentci run fly_pipeline deploy
```

## Environment variables

| Variable      | Description        |
| --------------| -------------------|
| FLY_API_TOKEN | Your Fly API Token |

## Jobs

| Job     | Description                      |
|---------|----------------------------------|
| deploy  | Deploys your application to Fly. |

## Programmatic usage

You can also use this pipeline programmatically:

```typescript
import { Client, connect } from "https://esm.sh/@dagger.io/dagger@0.8.1";
import { Dagger } from "https://deno.land/x/fly_pipeline/mod.ts";

const { deploy } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await deploy(client, src);
  });
}

pipeline();

```
