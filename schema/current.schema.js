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
            lat: {
              type: 'number',
              example: '-31.3436',
            },
            lon: {
              type: 'number',
              example: '-59.4464',
            },
            timezone: {
              type: 'string',
              example: 'America/Argentina/Cordoba',
            },
            timezone_offset: {
              type: 'integer',
              format: 'int32',
              example: '-10800',
            },
            current: {
              type: 'object',
              properties: {
                dt: {
                  type: 'integer',
                  format: 'int32',
                  example: '1622082533',
                },
                sunrise: {
                  type: 'integer',
                  format: 'int32',
                  example: '1622025922',
                },
                sunset: {
                  type: 'integer',
                  format: 'int32',
                  example: '1622063081',
                },
                temp: {
                  type: 'number',
                  example: '9.95',
                },
                feels_like: {
                  type: 'number',
                  example: '9.52',
                },
                pressure: {
                  type: 'integer',
                  format: 'int32',
                  example: '1016',
                },
                humidity: {
                  type: 'integer',
                  format: 'int32',
                  example: '78',
                },
                dew_point: {
                  type: 'number',
                  example: '6.3',
                },
                uvi: {
                  type: 'integer',
                  format: 'int32',
                  example: '0',
                },
                clouds: {
                  type: 'integer',
                  format: 'int32',
                  example: '1',
                },
                visibility: {
                  type: 'integer',
                  format: 'int32',
                  example: '10000',
                },
                wind_speed: {
                  type: 'number',
                  example: '1.57',
                },
                wind_deg: {
                  type: 'integer',
                  format: 'int32',
                  example: '352',
                },
                wind_gust: {
                  type: 'number',
                  example: '1.69',
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
