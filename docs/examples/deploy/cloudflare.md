---
sidebar_position: 2
title: Cloudflare
---


Run the following command to run the pre-built [Cloudflare Pipeline](https://github.com/fluent-ci-templates/cloudflare-pipeline) in your project to deploy your Cloudflare Workers to [Cloudflare](https://cloudflare.com):

```bash
dagger run fluentci cloudflare_pipeline deploy
```

## Environment variables

| Variable      | Description            |
| --------------| -----------------------|
| CF_API_TOKEN  | Cloudflare API token.  |
| CF_ACCOUNT_ID | Cloudflare account ID. |