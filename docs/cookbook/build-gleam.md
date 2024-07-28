---
sidebar_position: 5
---

# Build and test Gleam applications

This page explains how to build and test Gleam applications with FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Gleam`. In addition:

- Be familiar with creating Gleam-based applications.
- Have your Gleam project ready.

## Using the Gleam Plugin

You can use FluentCI to build and test Gleam applications using the [gleam plugin](https://github.com/fluent-ci-templates/gleam-pipeline), no need to install Gleam on your machine, FluentCI will handle everything for you.

The following commands can be used to build and test Gleam applications:

```bash
fluentci run --wasm gleam test
fluentci run --wasm gleam build
```

