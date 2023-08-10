---
sidebar_position: 11
title: Spin
---


Run the following command to run the pre-built [Spin Pipeline](https://github.com/fluent-ci-templates/spin-pipeline) in your project to deploy your application to [Fermyon Platform](https://www.fermyon.com/platform):

```bash
dagger run fluentci spin_pipeline build deploy
```

## Environment Variables

| Variable        | Description                      |
|-----------------|----------------------------------|
| SPIN_AUTH_TOKEN | Your Fermyon Cloud Access Token. |