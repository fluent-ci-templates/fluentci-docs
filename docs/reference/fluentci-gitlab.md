---
sidebar_position: 7
title: fluentci gitlab
---

Generate Gitlab CI `.gitlab-ci.yml` file for your project.

```bash
fluentci gl init [options]
```

### Options

| Option             | Description                               |
| ------------------ | ----------------------------------------- |
| `--help`, `-h`     | help for init                             |
| `--template`, `-t` | The name of the pipeline template to use. |
| `--reload`, `-r`   | Reload the pipeline source cache.         |

### Example

```bash
fluentci gl init -t android_pipeline
`.gitlab-ci.yml` generated successfully ✅
```

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


