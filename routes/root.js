module.exports = async (fastify) => {
  fastify.get('/', async (request, reply) => ({ root: true }));
};
