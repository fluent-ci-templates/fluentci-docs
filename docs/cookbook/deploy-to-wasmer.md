---
sidebar_position: 21
---

# Deploy to Wasmer Edge

This page explains how to deploy applications to Wasmer Edge using FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Wasmer`. In addition:

- Have your Wasmer project ready.
- If you don't already have a project to deploy to Wasmer Edge, you can create a default project by [installing and initializing Wasmer](https://docs.wasmer.io/edge/get-started).

## Using the Wasmer Plugin

You can use FluentCI to deploy applications to Wasmer Edge using the [wasmer plugin](https://github.com/fluent-ci-templates/wasmer-pipeline), no need to install Wasmer CLI on your machine, FluentCI will handle everything for you.

The following commands can be used to deploy applications to Wasmer Edge:

```bash
fluentci run --wasm wasmer build
# Deploy to Wasmer Edge, make sure to export WASMER_TOKEN
fluentci run --wasm wasmer deploy
```
