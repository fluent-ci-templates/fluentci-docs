---
sidebar_position: 9
---

# Test PHP applications

This guide will help you to test PHP applications with FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `PHP`. In addition:

- Be familiar with creating PHP-based applications.
- Have your PHP project ready.
- Have your `composer.json` and `phpunit.xml` files ready.
- Have your tests written in the `tests` directory.

## Using the PHP Plugin

You can use FluentCI to test PHP applications using the [php plugin](https://github.com/fluent-ci-templates/php-pipeline), no need to install PHP on your machine, FluentCI will handle everything for you.

The following commands can be used to test PHP applications:

```bash
fluentci run --wasm php compose_install
fluentci run --wasm php test
```
