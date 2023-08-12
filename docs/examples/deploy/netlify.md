---
sidebar_position: 7
title: Netlify
---


Run the following command to run the pre-built [Netlify Pipeline](https://github.com/fluent-ci-templates/netlify-pipeline) in your project to deploy your application to [Netlify](https://www.netlify.com):

```bash
dagger run fluentci netlify_pipeline deploy
```

## Environment variables

| Variable           | Description               |
| -------------------| --------------------------|
| NETLIFY_AUTH_TOKEN | Your Netlify Access Token |

## Jobs

| Job     | Description                      |
|---------|----------------------------------|
| deploy  | Deploys your application to Netlify. |

## Programmatic usage

You can also use this pipeline programmatically:

```typescript
import { Client, connect } from "https://esm.sh/@dagger.io/dagger@0.8.1";
import { Dagger } from "https://deno.land/x/netlify_pipeline/mod.ts";

const { deploy } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await deploy(client, src);
  });
}

pipeline();

```
