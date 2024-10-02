# 3-tier Application

## Files structure

```sh
.
└── client // React.js code
└── server // Fastify code
```

## How to test the application

Install [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/), then just execute:

```sh
docker-compose up -d
```
## Local development

To run the front-end and backe-end locally you go use prepared bash script. Run `./scripts/run-locahost.sh` to have front-end and back-end up and running. This scripts is tmux based.
