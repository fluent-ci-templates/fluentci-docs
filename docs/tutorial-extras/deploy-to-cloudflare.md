---
sidebar_position: 12
---

# Deploy to Cloudflare

This guide will show you how to deploy a React application to Cloudflare Pages and a Cloudflare Worker using FluentCI.

## Before you begin

- Have your React project ready.
- Have a Cloudflare account.
- Have a Cloudflare Pages project set up.
- Have a Cloudflare Worker set up.

## Using the Cloudflare Plugin

You can use FluentCI to deploy your React application to Cloudflare Pages and a Cloudflare Worker using the [cloudflare plugin](https://github.com/fluent-ci-templates/cloudflare-pipeline), no need to install Cloudflare Wrangler CLI or Node.js on your machine, FluentCI will handle everything for you.

The following commands can be used to deploy your React application to Cloudflare Pages:

```bash
 fluentci run --wasm bun run build
 fluentci run --wasm cloudflare pages_deploy dist --project-name $PROJECT_NAME
 # to deploy a Cloudflare Worker, set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID
 # in your environment variables and run:
 fluentci run --wasm cloudflare deploy
```
