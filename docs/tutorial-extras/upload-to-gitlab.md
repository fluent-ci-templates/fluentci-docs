---
sidebar_position: 20
---

# Upload assets to GitLab Releases

This page explains how to upload assets to GitLab Releases with FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `GitLab Releases`. In addition:

- Have your project ready, including the assets you want to upload.
- Have a GitLab account.
- Have a GitLab repository.
- Have a GitLab token.

## Using the GitLab Plugin

You can use FluentCI to upload assets to GitLab Releases using the [gitlab plugin](https://github.com/fluent-ci-templates/gitlab-pipeline), no need to install GitLab CLI on your machine, FluentCI will handle everything for you.

The following command can be used to upload assets to GitLab Releases:

```bash
# Make sure to set the GITLAB_ACCESS_TOKEN environment variable
fluentci run --wasm gitlab release_upload $TAG $FILE
```
