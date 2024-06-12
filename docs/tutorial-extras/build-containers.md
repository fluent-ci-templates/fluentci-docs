---
sidebar_position: 2
---

# Build Container Images

This page explains how to build container images for your applications using FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Docker`. In addition:

- Have Docker installed on your machine.
- Have your application source code along with `Dockerfile` handy.

## Using the Buildx Plugin

You can use FluentCI to build container images using the [buildx plugin](https://github.com/tsirysndr/daggerverse/tree/main/buildx), no need to install buildx on your machine, FluentCI will handle everything for you.

The following command can be used to build container images:

```bash
fluentci run --wasm buildx build --platform linux/amd64,linux/arm64 -t demo:latest .
```

## Using the Nixpacks Plugin

You can use FluentCI to build container images using the [nixpacks plugin](https://github.com/tsirysndr/daggerverse/tree/main/nixpacks), no need to install nixpacks on your machine, FluentCI will handle everything for you.

The following command can be used to plan and build container image:

```bash
fluentci run --wasm nixpacks nixpacks plan . --format json
fluentci run --wasm nixpacks nixpacks build . --name myapp
```
