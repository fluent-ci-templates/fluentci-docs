---
sidebar_position: 5
title: Fly
---


Run the following command to run the pre-built [Fly Pipeline](https://github.com/fluent-ci-templates/fly-pipeline) in your project to deploy your application to [fly.io](https://fly.io):

```bash
dagger run fluentci fly_pipeline deploy
```

## Environment variables

| Variable      | Description        |
| --------------| -------------------|
| FLY_API_TOKEN | Your Fly API Token |