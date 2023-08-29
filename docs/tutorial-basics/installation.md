---
sidebar_position: 1
title: Installing FluentCI
---

# Install fluentci

### What you'll need

- [Deno](https://deno.land/) version 1.35 or above
- [Dagger](https://dagger.io/) version 0.6.3 or above


### Install

Install fluentci using the following command:
```bash
deno install -A -r https://cli.fluentci.io -n fluentci
```

You need to add the following to your `~/.bashrc` or `~/.zshrc` file:
```bash
export PATH="$HOME/.deno/bin:$PATH"
```