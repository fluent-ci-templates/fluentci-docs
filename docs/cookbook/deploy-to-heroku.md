---
sidebar_position: 16
---

# Deploy to Heroku

This page explains how to deploy applications to Heroku using FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Heroku`. In addition:

- Have your Heroku project ready.
- Have a `Procfile` in your project root directory.
- If you don't already have a project to deploy to Heroku, you can create a default project by [installing and initializing Heroku](https://devcenter.heroku.com/).

## Using the Heroku Plugin

You can use FluentCI to deploy applications to Heroku using the [heroku plugin](https://github.com/fluent-ci-templates/heroku-pipeline), no need to install Heroku CLI on your machine, FluentCI will handle everything for you.

The following commands can be used to deploy applications to Heroku:

```bash
# Deploy to Heroku, make sure to export HEROKU_API_KEY and HEROKU_APP_NAME
fluentci run --wasm heroku deploy --app $HEROKU_APP_NAME --api_key $HEROKU_API_KEY
```
