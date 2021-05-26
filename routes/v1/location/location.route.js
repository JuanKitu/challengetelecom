const controller = require('../../../controllers/location.controller');
const schemaLocation = require('../../../schema/location.schema');

module.exports = async (fastify) => {
  fastify.get('/', {
    schema: schemaLocation.getLocation,
    handler: controller.getLocation,
  });
};
