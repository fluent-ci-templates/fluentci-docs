---
sidebar_position: 21
---

# Upload files to Cloudflare R2

This page explains how to upload files to Cloudflare R2 with FluentCI.

## Before you begin

The instructions on this page assume that you are familiar with `Cloudflare R2`. In addition:

- Have your project ready, including the files you want to upload.
- Have a Cloudflare account.
- Have a Cloudflare R2 Bucket.
- Have a Cloudflare R2 Access Key.
- Have a Cloudflare R2 Secret Key.
  
## Using the R2 Plugin

You can use FluentCI to upload files to Cloudflare R2 using the [r2-sync plugin](https://github.com/tsirysndr/daggerverse/tree/main/r2-sync), no need to install AWS CLI on your machine, FluentCI will handle everything for you.

The following command can be used to upload files to Cloudflare R2:

```bash
# Make sure to set the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables
fluentci run --wasm r2-sync upload --endpoint-url https://$ACCOUNT_ID.r2.cloudflarestorage.com s3://$BUCKET_NAME
```
