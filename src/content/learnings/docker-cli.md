---
title: Docker CLI Commands
slug: docker-cli-commands
date: 04 Aug, 24
---

## List container id of all containers

```sh
docker ps -a -q
```
## Run a container in detached mode

```sh
docker run -d --name container-name image:tag 
```
The paremeter `-d` or `--detach` runs container in the background and prints the container ID

## Stream logs of a running container

```sh
docker logs -f container-name
```
## Run a container with resource limits and logging

```sh
docker run -d --name myapp \
  --cpus 0.5 \
  --memory 512m \
  --memory-reservation 256m \
  --oom-kill-disable \
  --log-driver json-file \
  --log-opt max-size=10m \
  --log-opt max-file=3 \
  image:tag
```
Runs a container with specific CPU and memory limits, disables OOM killer, and configures JSON file logging with rotation.

## Run a container with environment variables

```sh
docker run -e VAR1=value1 -e VAR2=value2 image:tag 
```

## Run a container with a .env file

```sh
docker run --env-file=.env image:tag 
```

## Remove all the stopped containers

```sh
docker container prune
```

## Disk usage of containers
```sh
docker ps --size # docker ps -s
```
