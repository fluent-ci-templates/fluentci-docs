---
sidebar_position: 19
---

# Upload assets to GitHub 

This page explains how to upload assets to GitHub Releases with FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `GitHub Releases`. In addition:

- Have your project ready, including the assets you want to upload.
- Have a GitHub account.
- Have a GitHub repository.
- Have a GitHub token.

## Using the GitHub Plugin

You can use FluentCI to upload assets to GitHub Releases using the [github plugin](https://github.com/fluent-ci-templates/github-pipeline), no need to install GitHub CLI on your machine, FluentCI will handle everything for you.

The following command can be used to upload assets to GitHub Releases:

```bash
# Make sure to set the GH_TOKEN environment variable
fluentci run --wasm github release_upload $TAG $ASSET_PATH
```


