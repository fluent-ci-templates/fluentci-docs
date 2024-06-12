---
sidebar_position: 1
---

# Build and test Bun applications

This guide will show you how to build and test Bun applications with FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Bun`. In addition:

- Have your `Bun` project handy, including `package.json` and `test` files.

## Using the Bun Plugin

You can use FluentCI to build Bun applications using [bun plugin](https://github.com/fluent-ci-templates/bun-pipeline), no need to install Bun your machine, FluentCI will handle everything for you.

The following commands can be used to build and test Bun applications:

```bash
fluentci run --wasm bun test
fluentci run --wasm bun build
```

