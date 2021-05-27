const controller = require('../../../controllers/forecast.controller');
const schemaForecast = require('../../../schema/forecast.schema');

module.exports = async (fastify) => {
  fastify.get('/', {
    schema: schemaForecast.getForecast,
    handler: controller.getForecast,
  });
};
