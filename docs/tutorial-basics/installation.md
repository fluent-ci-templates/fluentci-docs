---
sidebar_position: 1
title: Installing FluentCI
---

# Install fluentci

### What you'll need

- [Deno](https://deno.land/) version 1.37 or above
- [Dagger](https://dagger.io/) version 0.8.4 < 0.9.0
 

### Install

Install fluentci using the following command:
```bash
deno install -A -r https://cli.fluentci.io -n fluentci
```

You need to add the following to your `~/.bashrc` or `~/.zshrc` file:
```bash
export PATH="$HOME/.deno/bin:$PATH"
```

### Homebrew

You can also install fluentci using [Homebrew](https://brew.sh/):
```bash
brew install fluentci-io/tap/cli
```