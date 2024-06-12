---
sidebar_position: 13
title: fluentci run
---

Run a local or a plugin from [FluentCI](https://fluentci.io/) registry, a collection of pre-built pipelines for common CI/CD workflows written in TypeScript/Rust (you don't need to run `fluentci init`).

```bash
fluentci run <pipeline> [jobs...] [options]
```

Or run the pipeline in the current directory (requires `fluentci init`):

```bash
fluentci run .
```

### Options

| Option           | Description                       |
| ---------------- | --------------------------------- |
| `--help`, `-h`   | help for fluentci                 |
| `--reload`, `-r` | Reload the pippeline source cache |
| `--wasm`         | Run the Wasm Plugin if available  |
| `--remote-exec`  | Run the pipeline remotely, requires FLUENTCI_PROJECT_ID and FLUENTCI_ACCESS_TOKEN |
| `--work-dir`    | Set the working directory for the pipeline |

### List of pre-built pipelines

- [android](https://github.com/fluent-ci-templates/android-pipeline)
- [elixir](https://github.com/fluent-ci-templates/elixir-pipeline)
- [deno](https://github.com/fluent-ci-templates/deno-pipeline)
- [django](https://github.com/fluent-ci-templates/django-pipeline)
- [fastlane](https://github.com/fluent-ci-templates/fastlane-pipeline)
- [go](https://github.com/fluent-ci-templates/go-pipeline)
- [laravel](https://github.com/fluent-ci-templates/laravel-pipeline)
- [ruby](https://github.com/fluent-ci-templates/ruby-pipeline)
- [rust](https://github.com/fluent-ci-templates/rust-pipeline)
- [symfony](https://github.com/fluent-ci-templates/symfony-pipeline)
