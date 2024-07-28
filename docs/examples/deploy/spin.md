---
sidebar_position: 11
title: Spin
---


Run the following command to run the pre-built [Spin Pipeline](https://github.com/fluent-ci-templates/spin-pipeline) in your project to deploy your application to [Fermyon Platform](https://www.fermyon.com/platform):

```bash
fluentci run spin_pipeline build deploy
```

## Environment Variables

| Variable        | Description                      |
|-----------------|----------------------------------|
| SPIN_AUTH_TOKEN | Your Fermyon Cloud Access Token. |

## Jobs

| Job     | Description                                                         |
|---------|---------------------------------------------------------------------|
| build   | Build your Spin application (Only Rust is supported at the moment). |
| deploy  | Deploy your Spin application to Fermyon Platform.                   |

## Programmatic usage

You can also use this pipeline programmatically:

```typescript
import { build, deploy } from "jsr:@fluentci/spin";

await build();
await deploy();
```