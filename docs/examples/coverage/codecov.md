---
sidebar_position: 1
title: Codecov
---

Run the following command to run the pre-built [Codecov Pipeline](https://github.com/fluent-ci-templates/codecov-pipeline) in your project to upload coverage to [Codecov](https://about.codecov.io/) ☂️:

```bash
dagger run fluentci codecov_pipeline upload
```

## Environment Variables

| Variable      | Description         | Usage    |
|---------------|---------------------|----------|
| CODECOV_TOKEN | Your Codecov token. | Required |
| CODECOV_URL   | Your Codecov URL.   | Optional |
