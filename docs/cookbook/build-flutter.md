---
sidebar_position: 4
---

# Build and test Flutter applications

This guide will help you build and test Flutter applications with FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Flutter`. In addition:

- Be familiar with creating Flutter-based applications.
- Have your Flutter project ready.

## Using the Flutter Plugin

You can use FluentCI to build and test Flutter applications using the [flutter plugin](https://github.com/fluent-ci-templates/flutter-pipeline), no need to install Flutter on your machine, FluentCI will handle everything for you.

The following commands can be used to build and test Flutter applications:

```bash
fluentci run --wasm flutter code_quality
fluentci run --wasm flutter test
fluentci run --wasm flutter build
```
