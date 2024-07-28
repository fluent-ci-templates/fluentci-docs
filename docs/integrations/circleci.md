---
sidebar_position: 3
title: CircleCI
---


The following code snippet shows how to integrate FluentCI with CircleCI.

```yaml
version: 2.1
jobs:
  job:
    steps:
      - checkout
      - run: |
          sudo apt-get update && sudo apt-get install -y curl unzip
          curl -fsSL https://cli.fluentci.io | bash
          fluentci --version
        name: Setup FluentCI
      - run: fluentci run --wasm go test
        name: tests
      - run: fluentci run --wasm go build -buildvcs=false
        name: build
    machine:
      image: ubuntu-2004:2023.07.1
workflows:
  fluentci:
    jobs:
      - job
```