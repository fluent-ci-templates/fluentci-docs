---
sidebar_position: 3
---

# Build and test Deno applications

This page explains how to build and test Deno applications with FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Deno`. In addition: 

- Have your `Deno` project handy, including `deno.json` and `test` files.

## Using the Deno Plugin

You can use FluentCI to build Deno applications using [deno plugin](https://github.com/fluent-ci-templates/deno-pipeline), no need to install Deno on your machine, FluentCI will handle everything for you.

The following commands can be used to build and test Deno applications:

```bash
fluentci run --wasm deno test
fluentci run --wasm deno compile -A --output myapp --target x86_64-unknown-linux-gnu main.ts # suppose main.ts is your entry file
```
