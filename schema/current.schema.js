const schemaCurrent = {};

schemaCurrent.getCurrent = {
  tags: ['Peticiones'],
  summary: 'Devuelve la ubicación y el estado de tiempo actual',
  response: {
    200: {
      description: 'Eata peticion va a devolver un codigo 200 siempre y cuando la IP sea valia y no privada',
      properties: {
        err: {
          type: 'boolean',
        },
        city: {
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
        current: {
          type: 'object',
          properties: {
            dt: {
              type: 'integer',
              format: 'int32',
              example: '1621999032',
            },
            sunrise: {
              type: 'integer',
              format: 'int32',
              example: '1622025776',
            },
            sunset: {
              type: 'integer',
              format: 'int32',
              example: '1622062639',
            },
            temp: {
              type: 'number',
              example: '9.47',
            },
            feels_like: {
              type: 'number',
              example: '9.47',
            },
            pressure: {
              type: 'integer',
              format: 'int32',
              example: '1021',
            },
            humidity: {
              type: 'integer',
              format: 'int32',
              example: '91',
            },
            dew_point: {
              type: 'number',
              example: '8.08',
            },
            uvi: {
              type: 'integer',
              format: 'int32',
              example: '0',
            },
            clouds: {
              type: 'integer',
              format: 'int32',
              example: '0',
            },
            visibility: {
              type: 'integer',
              format: 'int32',
              example: '10000',
            },
            wind_speed: {
              type: 'number',
              example: '0.98',
            },
            wind_deg: {
              type: 'integer',
              format: 'int32',
              example: '347',
            },
            wind_gust: {
              type: 'number',
              example: '1.01',
            },
            weather: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: {
                    type: 'integer',
                    format: 'int32',
                    example: '800',
                  },
                  main: {
                    type: 'string',
                    example: 'Clear',
                  },
                  description: {
                    type: 'string',
                    example: 'cielo claro',
                  },
                  icon: {
                    type: 'string',
                    example: '01n',
                  },
                },
              },
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

module.exports = schemaCurrent;
