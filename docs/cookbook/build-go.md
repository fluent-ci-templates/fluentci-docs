---
sidebar_position: 6
---

# Build and test Go applications

This page explains how to FluentCI to build and test Go applications.

## Before you begin

The instructions on this page assume that you are familiar with `Go`. In addition:

- Have your Go project handy.

## Using the Go Plugin

You can use FluentCI to build and test Go applications using the [go plugin](https://github.com/fluent-ci-templates/go-pipeline), no need to install Go on your machine, FluentCI will handle everything for you.

The following commands can be used to build and test Go applications:

```bash
fluentci run --wasm go test
fluentci run --wasm go build
```
