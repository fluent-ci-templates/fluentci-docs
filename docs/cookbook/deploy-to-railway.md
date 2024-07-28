---
sidebar_position: 18
---

# Deploy to Railway

This page explains how to deploy applications to Railway using FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Railway`. In addition:

- Have your Railway project ready.
- If you don't already have a project to deploy to Railway, you can create a default project by [installing and initializing Railway](https://docs.railway.app/getting-started).

## Using the Railway Plugin

You can use FluentCI to deploy applications to Railway using the [railway plugin](https://github.com/fluent-ci-templates/railway-pipeline), no need to install Railway CLI on your machine, FluentCI will handle everything for you.

The following commands can be used to deploy applications to Railway:

```bash
# Deploy to Railway, make sure to export RAILWAY_TOKEN
fluentci run --wasm railway deploy
```
