---
sidebar_position: 1
---

# Initializing a Project

Start by initializing a new project with the `init` command:

```bash
fluentci init
```

This will create a new directory called `.fluentci` in your current working directory. This directory contains all of the typescript files needed to run your CI/CD pipeline.

## From a pre-built pipeline

You can also initialize a project from a pre-built pipeline. To do this, use the `--template` flag:

```bash
fluentci init --template deno_pipeline
```
Or you can use the shorthand:

```bash
fluentci init -t deno_pipeline
```