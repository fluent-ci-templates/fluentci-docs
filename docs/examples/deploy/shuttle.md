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