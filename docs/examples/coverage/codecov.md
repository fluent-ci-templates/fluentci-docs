---
sidebar_position: 1
title: Codecov
---

Run the following command to run the pre-built [Codecov Pipeline](https://github.com/fluent-ci-templates/codecov-pipeline) in your project to upload coverage to [Codecov](https://about.codecov.io/) ☂️:

```bash
fluentci run codecov_pipeline upload
```

## Environment Variables

| Variable      | Description         | Usage    |
|---------------|---------------------|----------|
| CODECOV_TOKEN | Your Codecov token. | Required |
| CODECOV_URL   | Your Codecov URL.   | Optional |

## Jobs

| Job     | Description                      |
|---------|----------------------------------|
| upload  | Uploads coverage to Codecov.     |

## Programmatic usage

You can also use this pipeline programmatically:

```typescript
import { upload } from "https://deno.land/x/codecov_pipeline/mod.ts";

await upload();
```
