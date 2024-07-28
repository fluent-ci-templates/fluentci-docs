---
sidebar_position: 1
title: AWS CodePipeline
---

The following code snippet shows how to integrate FluentCI with AWS CodePipeline.

```yaml
version: 0.2
phases:
  install:
    commands:
      - curl -fsSL https://cli.fluentci.io | bash
      - fluentci --version
  build:
    commands:
      - fluentci run --wasm go test
      - fluentci run --wasm go build -buildvcs=false
  post_build:
    commands:
      - echo Build completed on `date`
```
