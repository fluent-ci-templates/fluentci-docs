---
sidebar_position: 1
title: fluentci
---

Run pipeline using [Dagger CI](https://daggerci.io/) and pre-built pipelines from the [Fluent CI](https://fluentci.io/), a collection of pre-built pipelines for common CI/CD workflows written in TypeScript (you don't need to run `fluentci init`).

```bash
dagger run fluentci <pipeline> [options]
```

Or run the pipeline in the current directory (requires `fluentci init`):

```bash
dagger run fluentci .
```

### Options

| Option | Description |
| ------ | ----------- |
| `--help`, `-h` | help for fluentci |
| `--reload`, `-r` | Reload the pippeline source cache |