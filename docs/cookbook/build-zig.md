---
sidebar_position: 12
---

# Build and test Zig applications

This guide will help you build and test Zig applications with FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Zig`. In addition:

- Be familiar with creating Zig-based applications.
- Have your Zig project ready, including `test` files.

## Using the Zig Plugin

You can use FluentCI to build and test Zig applications using the [zig plugin](https://github.com/fluent-ci-templates/zig-pipeline), no need to install Zig on your machine, FluentCI will handle everything for you.

The following commands can be used to build and test Zig applications:

```bash
fluentci run --wasm zig test
fluentci run --wasm zig build
```
