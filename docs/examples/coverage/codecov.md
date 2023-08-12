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

## Jobs

| Job     | Description                      |
|---------|----------------------------------|
| upload  | Uploads coverage to Codecov.     |

## Programmatic usage

You can also use this pipeline programmatically:

```typescript
import { Client, connect } from "https://esm.sh/@dagger.io/dagger@0.8.1";
import { Dagger } from "https://deno.land/x/codecov_pipeline/mod.ts";

const { upload } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await upload(client, src);
  });
}

pipeline();

```
