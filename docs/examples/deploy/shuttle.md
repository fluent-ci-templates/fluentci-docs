---
sidebar_position: 10
title: Shuttle
---

Run the following command to run the pre-built [Shuttle Pipeline](https://github.com/fluent-ci-templates/shuttle-pipeline) in your project to deploy your Rust application to [Shuttle](https://shuttle.rs):

```bash
dagger run fluentci shuttle_pipeline deploy
```

## Environment Variables

| Variable        | Description                      |
|-----------------|----------------------------------|
| SHUTTLE_API_KEY | Your Shuttle API key             |

## Jobs

| Job     | Description                                 |
|---------|---------------------------------------------|
| deploy  | Deploy your Rust application to shuttle.rs. |

## Programmatic usage

You can also use this pipeline programmatically:

```typescript
import { Client, connect } from "https://esm.sh/@dagger.io/dagger@0.8.1";
import { Dagger } from "https://deno.land/x/shuttle_pipeline/mod.ts";

const { deploy } = Dagger;

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await deploy(client, src);
  });
}

pipeline();

```