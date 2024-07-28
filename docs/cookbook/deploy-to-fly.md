---
sidebar_position: 15
---

# Deploy to Fly.io

This page explains how to deploy applications to [fly.io](https://fly.io) using FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `fly.io`. In addition:

- Have your Fly.io project ready.
- Have your application ready.
- Have a `fly.toml` file in the root of your project.
- If you don't already have a project to deploy to Fly.io, you can create a default project by [installing and initializing Fly.io](https://fly.io/docs/getting-started/installing-flyctl/).

## Using the Fly.io Plugin

You can use FluentCI to deploy applications to Fly.io using the [fly.io plugin](https://github.com/fluent-ci-templates/fly-pipeline), no need to install Fly.io CLI on your machine, FluentCI will handle everything for you.

The following commands can be used to deploy applications to `fly.io`:

```bash
# Deploy to Fly.io, make sure to export FLY_API_TOKEN
fluentci run --wasm fly deploy
```

