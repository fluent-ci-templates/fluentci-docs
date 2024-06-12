---
sidebar_position: 7
---

# Build and test Java applications

This guide will help you build and test Java applications with FluentCI.

## Before you begin

- Be familiar with creating Java-based applications.
- Be familiar with [Maven](https://maven.apache.org/maven-features.html)
- Have your Java project ready.

## Using the Maven Plugin

You can use FluentCI to build Java applications using [maven plugin](https://github.com/fluentci-io/maven-plugin), no need to install Maven or JDK on your machine, FluentCI will handle everything for you.

The following commands can be used to build and test Java applications:

```bash
fluentci run --wasm maven test
fluentci run --wasm maven package -Dmaven.test.skip=true
```
