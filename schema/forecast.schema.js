const schemaForecast = {};

schemaForecast.getForecast = {
  tags: ['Peticiones'],
  summary: 'Devuelve los datos de la ubicación actual y el estado del tiempo a 5 días.',
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
        daily: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              dt: {
                type: 'integer',
                format: 'int32',
                example: '1622041200',
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
              moonrise: {
                type: 'integer',
                format: 'int32',
                example: '1622063700',
              },
              moonset: {
                type: 'integer',
                format: 'int32',
                example: '1622025840',
              },
              moon_phase: {
                type: 'number',
                example: '0.5',
              },
              temp: {
                type: 'object',
                properties: {
                  day: {
                    type: 'number',
                    example: '17.39',
                  },
                  min: {
                    type: 'number',
                    example: '8.47',
                  },
                  max: {
                    type: 'number',
                    example: '19.83',
                  },
                  night: {
                    type: 'number',
                    example: '11.79',
                  },
                  eve: {
                    type: 'number',
                    example: '15.12',
                  },
                  morn: {
                    type: 'number',
                    example: '8.76',
                  },
                },
              },
              feels_like: {
                type: 'object',
                properties: {
                  day: {
                    type: 'number',
                    example: '16.7',
                  },
                  night: {
                    type: 'number',
                    example: '11.27',
                  },
                  eve: {
                    type: 'number',
                    example: '14.57',
                  },
                  morn: {
                    type: 'number',
                    example: '7.63',
                  },
                },
              },
              pressure: {
                type: 'integer',
                format: 'int32',
                example: '1018',
              },
              humidity: {
                type: 'integer',
                format: 'int32',
                example: '58',
              },
              dew_point: {
                type: 'number',
                example: '9.14',
              },
              wind_speed: {
                type: 'number',
                example: '4.46',
              },
              wind_deg: {
                type: 'integer',
                format: 'int32',
                example: '308',
              },
              wind_gust: {
                type: 'number',
                example: '6.74',
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
                      example: '01d',
                    },
                  },
                },
              },
              clouds: {
                type: 'integer',
                format: 'int32',
                example: '0',
              },
              pop: {
                type: 'integer',
                format: 'int32',
                example: '0',
              },
              uvi: {
                type: 'number',
                example: '3.46',
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

module.exports = schemaForecast;
