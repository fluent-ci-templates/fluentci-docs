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
import { deploy } from "https://pkg.fluentci.io/fly_pipeline@v0.5.1/mod.ts";

await deploy();
```
