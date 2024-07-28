---
sidebar_position: 1
title: Installing FluentCI
---

# Install fluentci

### What you'll need

- [Deno](https://deno.land/) version 1.42 or above
- [Dagger](https://dagger.io/) version >= 0.12.0 (Optional)
 

### Install

Install fluentci using the following command:
```bash
deno install -A -r https://cli.fluentci.io -n fluentci
```

You need to add the following to your `~/.bashrc` or `~/.zshrc` file:

```bash
export PATH="$HOME/.deno/bin:$PATH"
```

### Bash (Linux/macOS)

You can also install fluentci using the following command:

```bash
curl -fsSL https://cli.fluentci.io | bash
```

### Homebrew

You can also install fluentci using [Homebrew](https://brew.sh/):

```bash
brew install fluentci-io/tap/fluentci
```

### Pkgx

You can also install fluentci using [pkgx](https://pkgx.sh):

```bash
pkgx install fluentci
```