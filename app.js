const path = require('path');
const AutoLoad = require('fastify-autoload');
const swagger = require('fastify-swagger');

module.exports = async (fastify, opts) => {
  // Place here your custom code!

  fastify.register(swagger, {
    routePrefix: '/v1',
    swagger: {
      info: {
        title: 'Challenge de Back End Telecom',
        description: 'Una pequeña api rest para el pronostico del tiempo',
        version: '0.1.0',
      },
      host: '192.168.0.116',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
      validatorUrl: null,
    },
    exposeRoute: true,
  });
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: { ...opts },
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: { ...opts },
  });
};
