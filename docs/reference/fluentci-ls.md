---
sidebar_position: 10
title: fluentci list
---

List all available jobs in a pipeline.

```bash
fluentci ls <pipeline>
```

### Example

```sh
$ fluenci ls deno_pipeline
┬ deno_pipeline
├── fmt - Format your code
├── lint - Lint your code
└── test - Run your tests
```