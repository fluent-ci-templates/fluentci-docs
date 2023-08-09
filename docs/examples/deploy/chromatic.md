---
sidebar_position: 1
title: Chromatic
---


Run the following command to run the pre-built [Chromatic Pipeline](https://github.com/fluent-ci-templates/chromatic-pipeline) in your project to publish your storybook to [Chromatic](http://chromatic.com):

```bash
dagger run fluentci chromatic_pipeline publish
```

## Environment variables

| Variable                | Description                  |
| ----------------------- | ---------------------------- |
| CHROMATIC_PROJECT_TOKEN | Your Chromatic Project Token |