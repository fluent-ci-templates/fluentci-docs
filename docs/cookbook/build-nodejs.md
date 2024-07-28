---
sidebar_position: 8
---

# Build and test Node.js applications

This page explains how to build and test Nodejs applications with FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Nodejs`. In addition:

- Have your `Node.js` project handy, including `package.json` and `test.js` files.
- Make sure your `package.json` file includes a `build` script and a `test` script.

## Using the Node.js Plugin

You can use FluentCI to build and test Node.js applications using the [node.js plugin](https://github.com/fluent-ci-templates/nodejs-pipeline), no need to install Node.js on your machine, FluentCI will handle everything for you.

The following commands can be used to build and test Node.js applications:

```bash
fluentci run --wasm nodejs test
fluentci run --wasm nodejs build
```
