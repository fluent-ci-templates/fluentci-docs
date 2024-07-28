---
sidebar_position: 23
---

# Provision with Terraform

This page explains how to provision infrastructure using [Terraform](https://terraform.io) with FluentCI.

HashiCorp Terraform is an infrastructure-as-code (IaC) tool that lets you provision and manage cloud infrastructure. Terraform provides plugins called providers that let you interact with cloud providers and other APIs.

## Before you begin

The instructions on this page assume that you are familiar with `Terraform`. In addition:

- Have your Terraform project ready.
- If you don't already have a project to provision with Terraform, you can create a default project by [installing and initializing Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli).
- Make sure you have a `main.tf` file in your project root directory.

## Using the Terraform Plugin

You can use FluentCI to provision infrastructure using Terraform with the [terraform plugin](https://github.com/fluent-ci-templates/terraform-pipeline) without installing Terraform CLI on your machine. FluentCI will handle everything for you.

The following commands can be used to provision infrastructure using Terraform:

```bash
fluentci run --wasm terraform init
fluentci run --wasm terraform plan
fluentci run --wasm terraform apply
```
