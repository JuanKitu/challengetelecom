const schemaLocation = {};
schemaLocation.getLocation = {
  tags: ['Peticiones'],
  summary: 'Devuelve los datos de ubicación city según ip-api.',
  response: {
    200: {
      description: 'Eata peticion va a devolver un codigo 200 siempre y cuando la IP sea valia y no privada',
      properties: {
        err: {
          type: 'boolean',
          example: false,
        },
        data: {
          type: 'object',
          properties: {
            status: {
              type: 'string',
              example: 'success',
            },
            country: {
              type: 'string',
              example: 'Argentina',
            },
            countryCode: {
              type: 'string',
              example: 'AR',
            },
            region: {
              type: 'string',
              example: 'E',
            },
            regionName: {
              type: 'string',
              example: 'Entre Rios',
            },
            city: {
              type: 'string',
              example: 'Concepción del Uruguay',
            },
            zip: {
              type: 'string',
              example: '3260',
            },
            lat: {
              type: 'number',
              example: '-32.4847',
            },
            lon: {
              type: 'number',
              example: '-58.2205',
            },
            timezone: {
              type: 'string',
              example: 'America/Argentina/Cordoba',
            },
            isp: {
              type: 'string',
              example: 'Telecom Argentina S.A.',
            },
            org: {
              type: 'string',
              example: 'Telecom Personal Bs',
            },
            as: {
              type: 'string',
              example: 'AS7303 Telecom Argentina S.A.',
            },
            query: {
              type: 'string',
              example: '181.80.228.78',
            },
          },
        },
      },

    },
    404: {
      description: 'Esta peticion va a devolver un codigo 404 cuando se ingrese una ip privada o no valida',
      properties: {
        err: {
          type: 'boolean',
        },
        data: {
          type: 'object',
          properties: {
            status: {
              type: 'string',
              example: 'fail',
            },
            message: {
              type: 'string',
              example: 'private range',
            },
            query: {
              type: 'string',
              example: '192.168.0.116',
            },
          },
        },
      },
    },
  },

};
module.exports = schemaLocation;
