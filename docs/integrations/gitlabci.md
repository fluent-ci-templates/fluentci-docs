---
sidebar_position: 5
title: GitlabCI
---

The following code snippet shows how to integrate FluentCI with GitlabCI.

```yaml
.docker:
  image: denoland/deno:debian-1.42.4
  services:
    - docker:${DOCKER_VERSION}-dind
  variables:
    DOCKER_HOST: tcp://docker:2376
    DOCKER_TLS_VERIFY: "1"
    DOCKER_TLS_CERTDIR: /certs
    DOCKER_CERT_PATH: /certs/client
    DOCKER_DRIVER: overlay2
    DOCKER_VERSION: 20.10.16
    GITLAB_ACCESS_TOKEN: $GITLAB_ACCESS_TOKEN

.fluentci:
  extends: .docker
  before_script:
    - apt-get update
    - apt-get install -y curl tar gzip ca-certificates openssl git unzip libncursesw6
    - deno install -A -r https://cli.fluentci.io -n fluentci
    - fluentci --version
    - curl -L https://dl.dagger.io/dagger/install.sh | DAGGER_VERSION=0.11.0 sh
    - mv bin/dagger /usr/local/bin
    - dagger version

tests:
  extends: .fluentci
  script:
    - fluentci run --wasm go test

build:
  extends: .fluentci
  script:
    - fluentci run --wasm go build -buildvcs=false
```