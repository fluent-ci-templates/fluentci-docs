---
sidebar_position: 14
---

# Deploy to Firebase

This page explains how to deploy applications to Firebase using FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Firebase`. In addition:

- Have your Firebase project ready.
- If you don't already have a project to deploy to Firebase, you can create a default project by [installing and initializing Firebase](https://firebase.google.com/docs/hosting/quickstart#initialize).

## Using the Firebase Plugin

You can use FluentCI to deploy applications to Firebase using the [firebase plugin](https://github.com/fluent-ci-templates/firebase-pipeline), no need to install Firebase CLI on your machine, FluentCI will handle everything for you.

The following commands can be used to deploy applications to Firebase:

```bash
# Deploy to Firebase, make sure to export FIREBASE_TOKEN and DEPLOY_DIRECTORY
fluentci run --wasm firebase build
fluentci run --wasm firebase deploy
```
