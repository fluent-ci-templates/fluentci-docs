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

| Option           | Description                       |
| ---------------- | --------------------------------- |
| `--help`, `-h`   | help for fluentci                 |
| `--reload`, `-r` | Reload the pippeline source cache |

### List of pre-built pipelines

- [android](https://github.com/fluent-ci-templates/android-pipeline)
- [elixir](https://github.com/fluent-ci-templates/elixir-pipeline)
- [deno](https://github.com/fluent-ci-templates/deno-pipeline)
- [django](https://github.com/fluent-ci-templates/django-pipeline)
- [fastlane](https://github.com/fluent-ci-templates/fastlane-pipeline)
- [flutter](https://github.com/fluent-ci-templates/ruby-pipeline)
- [go](https://github.com/fluent-ci-templates/go-pipeline)
- [laravel](https://github.com/fluent-ci-templates/laravel-pipeline)
- [ruby](https://github.com/fluent-ci-templates/ruby-pipeline)
- [rust](https://github.com/fluent-ci-templates/rust-pipeline)
- [symfony](https://github.com/fluent-ci-templates/symfony-pipeline)
