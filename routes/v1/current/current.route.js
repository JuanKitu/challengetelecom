const controller = require('../../../controllers/current.controller');
const schemaCurrent = require('../../../schema/current.schema');

module.exports = async (fastify) => {
  fastify.get('/', {
    schema: schemaCurrent.getCurrent,
    handler: controller.getCurrent,
  });
  fastify.get('/:city', {
    schema: schemaCurrent.getCurrentCity,
    handler: controller.getCurrentCity,
  });
};
