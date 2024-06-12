---
sidebar_position: 1
title: Introduction
---

# Fluent CI Documentation

Let's discover **Fluent CI in less than 5 minutes**.

## What is Fluent CI?

Fluent CI is a CI/CD tool that allows you to build, test, and deploy your code. It is a self-hosted solution built on top of [Dagger](https://dagger.io/), [Wasm](https://webassembly.org) and [Deno](https://deno.land/), can be run locally or on a server, and is completely free and open-source.

It is also a registry of pre-built pipelines that you can use to build, test, and deploy your code. This means you don't have to write your CI/CD configuration from scratch. You can simply search for and use pipelines that others have already built for frameworks like Django, React, Node, etc.

## Why Fluent CI?

Fluent CI is a great choice for your CI/CD needs because it is:

- **Easy to use**: built on top of [Dagger](https://dagger.io/) and [Wasm](https://webassembly.org/), you can easily write and run pipelines in Typescript/Rust or any other language that compiles to Wasm.

- **Web-based UI**: you can easily set up and manage your pipelines using a web-based UI (FluentCI Studio).

- **Self-hosted**: self-hosted solution, which means you can run it locally or on a server. This gives you complete control over your CI/CD process. No need to rely on third-party services like GitHub Actions, GitLab CI, etc.

- **Free and open-source**: completely free and open-source, you can use it for any purpose, commercial or non-commercial, without any restrictions.

- **Extensible**: you can easily extend Fluent CI to meet your specific needs.

## How does Fluent CI work?

All Fluent CI pipelines are written in Typescript ([Deno](https://deno.com/)) / [Rust](https://www.rust-lang.org/). This means you can easily read and understand them. You can also easily modify them to meet your specific needs. This makes Fluent CI a great choice for your CI/CD needs.

And all pipelines will be executed :

- by [Dagger](https://dagger.io/) in a Docker container, you can easily run them locally or on a server, any platform that supports Docker.
- Or by [FluentCI Engine](https://github.com/fluentci-io/fluentci-engine) in a isolated environment directly on your host machine (thanks to Nix, Pkgx, Mise, etc.), for Wasm based Pipelines.
