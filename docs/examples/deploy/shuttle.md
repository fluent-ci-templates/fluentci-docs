---
sidebar_position: 10
title: Shuttle
---

Run the following command to run the pre-built [Shuttle Pipeline](https://github.com/fluent-ci-templates/shuttle-pipeline) in your project to deploy your Rust application to [Shuttle](https://shuttle.rs):

```bash
fluentci run shuttle_pipeline deploy
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
import Client, { connect } from "https://sdk.fluentci.io/v0.1.7/mod.ts";
import { deploy } from "https://pkg.fluentci.io/shuttle_pipeline@v0.5.0/mod.ts";

function pipeline(src = ".") {
  connect(async (client: Client) => {
    await deploy(client, src);
  });
}

pipeline();
```