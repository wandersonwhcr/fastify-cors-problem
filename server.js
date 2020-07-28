const fastify = require('fastify')({ logger: true });

fastify.register(require('./foobar-plugin.js'), { prefix: '/v1/foobar' });

fastify.register(require('fastify-cors'), { preflight: process.env.FASTIFY_CORS_PREFLIGHT === '1' });

fastify.listen(process.env.PORT, '0.0.0.0')
  .catch((error) => { fastify.log.error(error); process.exit(255); });
