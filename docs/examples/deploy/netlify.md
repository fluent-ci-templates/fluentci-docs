---
sidebar_position: 7
title: Netlify
---


Run the following command to run the pre-built [Netlify Pipeline](https://github.com/fluent-ci-templates/netlify-pipeline) in your project to deploy your application to [Netlify](https://www.netlify.com):

```bash
dagger run fluentci netlify_pipeline deploy
```

## Environment variables

| Variable           | Description               |
| -------------------| --------------------------|
| NETLIFY_AUTH_TOKEN | Your Netlify Access Token |
