---
sidebar_position: 18
---

# Upload Coverage to Codecov

This page explains how to upload coverage reports to Codecov with FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Codecov`. In addition:

- Have your project ready, including the coverage report.
- Have a Codecov account.
- Have a Codecov token.
- Have a Codecov project.

## Using the Codecov Plugin

You can use FluentCI to upload coverage reports to Codecov using the [codecov plugin](https://github.com/fluent-ci-templates/codecov-pipeline), no need to install Codecov CLI on your machine, FluentCI will handle everything for you.

The following command can be used to upload coverage reports to Codecov:

```bash
# Make sure to set the CODECOV_TOKEN environment variable
fluentci run --wasm codecov upload
```
