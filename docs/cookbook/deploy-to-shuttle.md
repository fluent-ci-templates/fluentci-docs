---
sidebar_position: 19
---

# Deploy to Shuttle

This page explains how to deploy applications to Shuttle using FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Shuttle`. In addition:

- Have your Shuttle project ready.
- If you don't already have a project to deploy to Shuttle, you can create a default project by [installing and initializing Shuttle](https://docs.shuttle.rs/getting-started/installation).

## Using the Shuttle Plugin

You can use FluentCI to deploy applications to Shuttle using the [shuttle plugin](https://github.com/fluent-ci-templates/shuttle-pipeline), no need to install Shuttle CLI on your machine, FluentCI will handle everything for you.

The following commands can be used to deploy applications to Shuttle:

```bash
# Deploy to Shuttle, make sure to export SHUTTLE_API_KEY
fluentci run --wasm shuttle deploy
```
