---
sidebar_position: 20
---

# Deploy to Fermyon Cloud

This page explains how to deploy applications to Fermyon CLoud using FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Fermyon Cloud`. In addition:

- Have your Spin project ready.
- If you don't already have a project to deploy to Fermyon Cloud, you can create a default project by [installing and initializing Spin](https://developer.fermyon.com/cloud/quickstart).

## Using the Spin Plugin

You can use FluentCI to deploy applications to Fermyon Cloud using the [spin plugin](https://github.com/fluent-ci-templates/spin-pipeline), no need to install Spin CLI on your machine, FluentCI will handle everything for you.

The following commands can be used to deploy applications to Fermyon Cloud:

```bash
# Deploy to Fermyon Cloud, make sure to export SPIN_AUTH_TOKEN
fluentci run --wasm spin build
fluentci run --wasm spin deploy
```
