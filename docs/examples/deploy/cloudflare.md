---
sidebar_position: 2
title: Cloudflare
---


Run the following command to run the pre-built [Cloudflare Pipeline](https://github.com/fluent-ci-templates/cloudflare-pipeline) in your project to deploy your Cloudflare Workers to [Cloudflare](https://cloudflare.com):

```bash
fluentci run cloudflare_pipeline deploy
```

## Environment variables

| Variable      | Description            |
| --------------| -----------------------|
| CF_API_TOKEN  | Cloudflare API token.  |
| CF_ACCOUNT_ID | Cloudflare account ID. |

## Jobs

| Job     | Description                      |
|---------|----------------------------------|
| deploy  | Deploys your Worker to Cloudflare. |

## Programmatic usage

You can also use this pipeline programmatically:

```typescript
import { deploy } from from "jsr:@fluentci/chromatic";

await deploy();

```
