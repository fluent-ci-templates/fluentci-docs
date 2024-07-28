---
sidebar_position: 10
---

# Build and test Rust applications

This page explains how to build and test Rust applications with FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Rust`. In addition:

- Be familiar with creating Rust-based applications.
- Have your `Rust` project ready, including `test` files.

## Using the Rust Plugin

You can use FluentCI to build and test Rust applications using the [rust plugin](https://github.com/fluent-ci-templates/rust-pipeline), no need to install Rust on your machine, FluentCI will handle everything for you.

The following commands can be used to build and test Rust applications:

```bash
fluentci run --wasm rust test
fluentci run --wasm rust build
```
