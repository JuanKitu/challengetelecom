module.exports = async (fastify) => {
  fastify.get('/', async (request, reply) => 'this is an example');
};
