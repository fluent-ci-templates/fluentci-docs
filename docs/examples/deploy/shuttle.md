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
import { deploy } from "https://pkg.fluentci.io/shuttle_pipeline@v0.6.0/mod.ts";

await deploy(client, src);
```