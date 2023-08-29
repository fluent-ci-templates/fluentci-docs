---
sidebar_position: 1
title: Chromatic
---


Run the following command to run the pre-built [Chromatic Pipeline](https://github.com/fluent-ci-templates/chromatic-pipeline) in your project to publish your storybook to [Chromatic](https://chromatic.com):

```bash
fluentci run chromatic_pipeline publish
```

## Environment variables

| Variable                | Description                  |
| ----------------------- | ---------------------------- |
| CHROMATIC_PROJECT_TOKEN | Your Chromatic Project Token |


## Jobs

| Job     | Description                            |
|---------|----------------------------------------|
| publish | Publishes your Storybook to Chromatic. |

## Programmatic usage

You can also use this pipeline programmatically:

```typescript
import { Client, connect } from "https://esm.sh/@dagger.io/dagger@0.8.1";
import { Dagger } from "https://deno.land/x/chromatic_pipeline/mod.ts";

const { publish } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await publish(client, src);
  });
}

pipeline();

```
