---
sidebar_position: 7
title: Netlify
---


Run the following command to run the pre-built [Netlify Pipeline](https://github.com/fluent-ci-templates/netlify-pipeline) in your project to deploy your application to [Netlify](https://www.netlify.com):

```bash
fluentci run netlify_pipeline deploy
```

## Environment variables

| Variable           | Description                             |
| -------------------| ----------------------------------------|
| NETLIFY_AUTH_TOKEN | Your Netlify Access Token               |
| NETLIFY_SITE_ID    | Your Netlify Site ID                    |
| NETLIFY_SITE_DIR   | Your directory to deploy (default: `.`) |

## Jobs

| Job     | Description                      |
|---------|----------------------------------|
| deploy  | Deploys your application to Netlify. |

## Programmatic usage

You can also use this pipeline programmatically:

```typescript
import Client, { connect } from "https://sdk.fluentci.io/v0.1.7/mod.ts";
import { build, deploy } from "https://pkg.fluentci.io/netlify_pipeline@v0.5.2/mod.ts";

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await build(client, src);
    await deploy(client, src);
  });
}

pipeline();

```
