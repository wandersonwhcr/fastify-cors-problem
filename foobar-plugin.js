module.exports = function FoobarPlugin(fastify, options, done) {

  fastify.addSchema({
    $id: 'identifier',
    type: 'string',
    format: 'uuid',
  });

  fastify.get('/:foobarId', {
    schema: {
      params: {
        foobarId: { $ref: 'identifier#' },
      },
    },

    handler: function Find(request, reply) {
      reply.send(request.params);
    },
  });

  done();
};
