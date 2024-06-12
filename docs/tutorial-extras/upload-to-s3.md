---
sidebar_position: 22
---

# Upload files to AWS S3

This page explains how to upload files to AWS S3 with FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `AWS S3`. In addition:

- Have your project ready, including the files you want to upload.
- Have an AWS account.
- Have an AWS S3 Bucket.
- Have an AWS Access Key.
- Have an AWS Secret Key.

## Using the S3 Plugin

You can use FluentCI to upload files to AWS S3 using the [r2-sync plugin](https://github.com/tsirysndr/daggerverse/tree/main/r2-sync), no need to install AWS CLI on your machine, FluentCI will handle everything for you.

The following command can be used to upload files to `AWS S3`:

```bash
# Make sure to set the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables
fluentci run --wasm r2-sync upload --endpoint-url $ENDPOINT_URL s3://$BUCKET_NAME
```
