---
sidebar_position: 6
title: Heroku
---


Run the following command to run the pre-built [Heroku Pipeline](https://github.com/fluent-ci-templates/heroku-pipeline) in your project to deploy your application to [Heroku](https://www.heroku.com):

```bash
dagger run fluentci heroku_pipeline deploy
```

## Environment variables

| Variable        | Description         |
|-----------------|---------------------|
| HEROKU_API_KEY  | Your Heroku API Key |
| HEROKU_APP_NAME | Your Heroku App     |