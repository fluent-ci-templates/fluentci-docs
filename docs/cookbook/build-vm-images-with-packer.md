---
sidebar_position: 11
---

# Build VM images with Packer

[Packer](https://www.packer.io) is an open source tool for creating identical Virtual Machine (VM) images for multiple platforms from a single source configuration. This page explains how to use Packer and FluentCI to create a VM image.

## Before you begin

The instructions on this page assume that you are familiar with `Packer`. In addition:

- Have your source code including the [Packer template](https://www.packer.io/docs/templates) handy.
  
## Using the Packer Plugin

You can use FluentCI to build VM images using the [packer plugin](https://github.com/fluentci-io/packer-plugin), no need to install Packer on your machine, FluentCI will handle everything for you.

The following command can be used to build VM image with Packer:

```bash
fluenci run --wasm packer fmt
fluenci run --wasm packer validate
fluenci run --wasm packer build
```
