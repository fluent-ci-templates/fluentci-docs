---
sidebar_position: 8
title: Railway
---


Run the following command to run the pre-built [Railway Pipeline](https://github.com/fluent-ci-templates/railway-pipeline) in your project to deploy your application to [Railway](https://railway.app):

```bash
fluentci run railway_pipeline deploy
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
import { deploy } from "https://pkg.fluentci.io/railway_pipeline@v0.6.0/mod.ts";

await deploy();
```