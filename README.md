# fastify-cors-problem

An example of fastify-cors breaking fastify global schemas

## Usage

```bash
docker run --rm --interactive --tty \
  --user `id -u`:`id -g` \
  --volume `pwd`:/app \
  --workdir /app \
  --env PORT=3000 \
  --env FASTIFY_CORS_PREFLIGHT=1 \
  --publish 3000:3000 \
  node npm start
```

Fastify runs normally if `FASTIFY_CORS_PREFLIGHT` is equal to `0`.

## Workaround

We must register `fastify-cors` after all plugins.
