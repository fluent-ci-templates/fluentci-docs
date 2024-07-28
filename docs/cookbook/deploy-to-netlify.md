---
sidebar_position: 17
---

# Deploy to Netlify

This page explains how to deploy applications to Netlify using FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Netlify`. In addition:

- Have your Netlify project ready.
- If you don't already have a project to deploy to Netlify, you can create a default project by [installing and initializing Netlify](https://docs.netlify.com/get-started/).

## Using the Netlify Plugin

You can use FluentCI to deploy applications to Netlify using the [netlify plugin](https://github.com/fluent-ci-templates/netlify-pipeline), no need to install Netlify CLI or Node.js on your machine, FluentCI will handle everything for you.

The following commands can be used to deploy applications to Netlify:

```bash
# Deploy to Netlify, make sure to export NETLIFY_AUTH_TOKEN, NETLIFY_SITE_ID and NETLIFY_SITE_DIR
fluentci run --wasm netlify deploy --dir $NETLIFY_SITE_DIR
```
