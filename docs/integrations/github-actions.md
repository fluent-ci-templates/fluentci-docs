---
sidebar_position: 4
title: Github Actions
---


The following code snippet shows how to integrate FluentCI with Github Actions.

```yaml
name: ci
on:
  push:
    branches:
      - main
jobs:
  tasks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Fluent CI
        uses: fluentci-io/setup-fluentci@v5
      - name: tests
        run: fluentci run --wasm go test
      - name: build
        run: fluentci run --wasm go build -buildvcs=false
```