# fastify-cors-problem

An example of fastify-cors breaking fastify global schemas

## Usage

```bash
docker run --rm --interactive --tty \
  --user `id -u`:`id -g` \
  --volume `pwd`:/app \
  --workdir /app \
  --env PORT=3000 \
  --publish 3000:3000 \
  node npm start
```
