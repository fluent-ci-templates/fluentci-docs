---
sidebar_position: 3
title: Deno
---

Run the following command to run the pre-built [Deno Pipeline](https://github.com/fluent-ci-templates/deno-pipeline) in your project to deploy to Deno Deploy:

```bash
dagger run fluentci deno_pipeline deploy
```

## Environment variables (Deno Deploy)

| Variable          | Description               | Default    |
| ----------------- | ------------------------- | ---------- |
| DENO_PROJECT      | Your project name         |            |
| NO_STATIC         | Disable static assets     | `false`    |
| EXCLUDE           | Exclude files from deploy |            |
| DENO_DEPLOY_TOKEN | Your Deno Deploy token    |            |
| DENO_MAIN_SCRIPT  | Your main script          | `main.tsx` |

## Programmatic usage

You can also use this pipeline programmatically:

```ts
import Client, { connect } from "@dagger.io/dagger";
import { Dagger } from "https://deno.land/x/deno_pipeline/mod.ts";

const { deploy } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await deploy(client, src);
  });
}

pipeline();
```
