const fastify = require('fastify')({ logger: true });

fastify.listen(process.env.PORT, '0.0.0.0')
  .catch((error) => { fastify.log.error(error); process.exit(255); });
