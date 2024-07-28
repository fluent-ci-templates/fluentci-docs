---
sidebar_position: 2
title: Azure Pipelines
---

The following code snippet shows how to integrate FluentCI with Azure Pipelines.

```yaml
trigger:
  - main
pool:
  vmImage: ubuntu-latest
steps:
  - script: |
      curl -fsSL https://cli.fluentci.io | bash
      fluentci --version
      echo "##vso[task.prependpath]${HOME}/.deno/bin
    displayName: Setup FluentCI
  - script: fluentci run --wasm go test
    displayName: tests
  - script: fluentci run --wasm go build -buildvcs=false
    displayName: build
```