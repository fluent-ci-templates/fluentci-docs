---
sidebar_position: 22
---

# Provision with Pulumi

This page explains how to provision infrastructure using [Pulumi](https://pulumi.com) with FluentCI.

Pulumi is an infrastructure-as-code (IaC) tool that lets you provision and manage cloud infrastructure. Pulumi provides plugins called providers that let you interact with cloud providers and other APIs.

## Before you begin

The instructions on this page assume that you are familiar with `Pulumi`. In addition:

- Have your Pulumi project ready.
- If you don't already have a project to provision with Pulumi, you can create a default project by [installing and initializing Pulumi](https://www.pulumi.com/docs/install/).
- Make sure you have a `Pulumi.yaml` file in your project root directory.
- Make sure you have a `Pulumi.dev.yaml` file in your project root directory.

## Using the Pulumi Plugin

You can use FluentCI to provision infrastructure using Pulumi with the [pulumi plugin](https://github.com/fluent-ci-templates/pulumi-pipeline) without installing Pulumi CLI on your machine. FluentCI will handle everything for you.

The following commands can be used to provision infrastructure using Pulumi:

```bash
fluentci run --wasm pulumi init
fluentci run --wasm pulumi up
```
