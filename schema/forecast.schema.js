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
              example: 'C',
            },
            regionName: {
              type: 'string',
              example: 'Buenos Aires F.D.',
            },
            city: {
              type: 'string',
              example: 'Montserrat',
            },
            zip: {
              type: 'string',
              example: '1871',
            },
            lat: {
              type: 'number',
              example: '-34.6092',
            },
            lon: {
              type: 'number',
              example: '-58.3789',
            },
            timezone: {
              type: 'string',
              example: 'America/Argentina/Buenos_Aires',
            },
            isp: {
              type: 'string',
              example: 'Techtel LMDS Comunicaciones Interactivas S.A.',
            },
            org: {
              type: 'string',
              example: 'AMX Argentina S.A',
            },
            as: {
              type: 'string',
              example: 'AS11664 Techtel LMDS Comunicaciones Interactivas S.A.',
            },
            query: {
              type: 'string',
              example: '186.12.96.29',
            },
          },
        },
        daily: {
          type: 'object',
          properties: {
            lat: {
              type: 'number',
              example: '-34.6092',
            },
            lon: {
              type: 'number',
              example: '-58.3789',
            },
            timezone: {
              type: 'string',
              example: 'America/Argentina/Buenos_Aires',
            },
            timezone_offset: {
              type: 'integer',
              format: 'int32',
              example: '-10800',
            },
            daily: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  dt: {
                    type: 'integer',
                    format: 'int32',
                    example: '1622127600',
                  },
                  sunrise: {
                    type: 'integer',
                    format: 'int32',
                    example: '1622112541',
                  },
                  sunset: {
                    type: 'integer',
                    format: 'int32',
                    example: '1622148764',
                  },
                  moonrise: {
                    type: 'integer',
                    format: 'int32',
                    example: '1622153100',
                  },
                  moonset: {
                    type: 'integer',
                    format: 'int32',
                    example: '1622117040',
                  },
                  moon_phase: {
                    type: 'number',
                    example: '0.55',
                  },
                  temp: {
                    type: 'object',
                    properties: {
                      day: {
                        type: 'number',
                        example: '16.39',
                      },
                      min: {
                        type: 'number',
                        example: '12.11',
                      },
                      max: {
                        type: 'number',
                        example: '18.49',
                      },
                      night: {
                        type: 'number',
                        example: '15.16',
                      },
                      eve: {
                        type: 'number',
                        example: '16.93',
                      },
                      morn: {
                        type: 'number',
                        example: '12.27',
                      },
                    },
                  },
                  feels_like: {
                    type: 'object',
                    properties: {
                      day: {
                        type: 'number',
                        example: '15.73',
                      },
                      night: {
                        type: 'number',
                        example: '14.87',
                      },
                      eve: {
                        type: 'number',
                        example: '16.56',
                      },
                      morn: {
                        type: 'number',
                        example: '11.56',
                      },
                    },
                  },
                  pressure: {
                    type: 'integer',
                    format: 'int32',
                    example: '1012',
                  },
                  humidity: {
                    type: 'integer',
                    format: 'int32',
                    example: '63',
                  },
                  dew_point: {
                    type: 'number',
                    example: '9.34',
                  },
                  wind_speed: {
                    type: 'number',
                    example: '5.92',
                  },
                  wind_deg: {
                    type: 'integer',
                    format: 'int32',
                    example: '340',
                  },
                  wind_gust: {
                    type: 'number',
                    example: '13.69',
                  },
                  weather: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'integer',
                          format: 'int32',
                          example: '801',
                        },
                        main: {
                          type: 'string',
                          example: 'Clouds',
                        },
                        description: {
                          type: 'string',
                          example: 'algo de nubes',
                        },
                        icon: {
                          type: 'string',
                          example: '02d',
                        },
                      },
                    },
                  },
                  clouds: {
                    type: 'integer',
                    format: 'int32',
                    example: '16',
                  },
                  pop: {
                    type: 'integer',
                    format: 'int32',
                    example: '0',
                  },
                  uvi: {
                    type: 'number',
                    example: '3.12',
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
schemaForecast.getForecastCity = {
  tags: ['Peticiones'],
  summary: 'Devuelve los datos de ubicación city y el estado del tiempo a 5 dias',
  response: {
    200: {
      description: 'Eata peticion va a devolver un codigo 200 siempre y cuando city se encuentre en la BD y sea valida',
      properties: {
        err: {
          type: 'boolean',
        },
        city: {
          type: 'object',
          properties: {
            latitude: {
              type: 'number',
              example: '-34.921417',
            },
            longitude: {
              type: 'number',
              example: '-57.954609',
            },
            type: {
              type: 'string',
              example: 'venue',
            },
            distance: {
              type: 'number',
              example: '0.019',
            },
            name: {
              type: 'string',
              example: 'Piedra fundacional de la Ciudad',
            },
            number: {
              type: 'string',
              format: 'nullable',
            },
            postal_code: {
              type: 'string',
              format: 'nullable',
            },
            street: {
              type: 'string',
              format: 'nullable',
            },
            confidence: {
              type: 'number',
              example: '0.8',
            },
            region: {
              type: 'string',
              example: 'Buenos Aires',
            },
            region_code: {
              type: 'string',
              example: 'BA',
            },
            county: {
              type: 'string',
              example: 'La Plata',
            },
            locality: {
              type: 'string',
              format: 'nullable',
            },
            administrative_area: {
              type: 'string',
              format: 'nullable',
            },
            neighbourhood: {
              type: 'string',
              format: 'nullable',
            },
            country: {
              type: 'string',
              example: 'Argentina',
            },
            country_code: {
              type: 'string',
              example: 'ARG',
            },
            continent: {
              type: 'string',
              example: 'South America',
            },
            label: {
              type: 'string',
              example: 'Piedra fundacional de la Ciudad, BA, Argentina',
            },
          },
        },
        daily: {
          type: 'object',
          properties: {
            lat: {
              type: 'number',
              example: '-34.9214',
            },
            lon: {
              type: 'number',
              example: '-57.9544',
            },
            timezone: {
              type: 'string',
              example: 'America/Argentina/Buenos_Aires',
            },
            timezone_offset: {
              type: 'integer',
              format: 'int32',
              example: '-10800',
            },
            daily: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  dt: {
                    type: 'integer',
                    format: 'int32',
                    example: '1622127600',
                  },
                  sunrise: {
                    type: 'integer',
                    format: 'int32',
                    example: '1622112483',
                  },
                  sunset: {
                    type: 'integer',
                    format: 'int32',
                    example: '1622148619',
                  },
                  moonrise: {
                    type: 'integer',
                    format: 'int32',
                    example: '1622152920',
                  },
                  moonset: {
                    type: 'integer',
                    format: 'int32',
                    example: '1622117040',
                  },
                  moon_phase: {
                    type: 'number',
                    example: '0.55',
                  },
                  temp: {
                    type: 'object',
                    properties: {
                      day: {
                        type: 'number',
                        example: '16.91',
                      },
                      min: {
                        type: 'number',
                        example: '11.37',
                      },
                      max: {
                        type: 'number',
                        example: '18.39',
                      },
                      night: {
                        type: 'number',
                        example: '14.81',
                      },
                      eve: {
                        type: 'number',
                        example: '15.96',
                      },
                      morn: {
                        type: 'number',
                        example: '11.55',
                      },
                    },
                  },
                  feels_like: {
                    type: 'object',
                    properties: {
                      day: {
                        type: 'number',
                        example: '16.2',
                      },
                      night: {
                        type: 'number',
                        example: '14.54',
                      },
                      eve: {
                        type: 'number',
                        example: '15.54',
                      },
                      morn: {
                        type: 'number',
                        example: '10.8',
                      },
                    },
                  },
                  pressure: {
                    type: 'integer',
                    format: 'int32',
                    example: '1012',
                  },
                  humidity: {
                    type: 'integer',
                    format: 'int32',
                    example: '59',
                  },
                  dew_point: {
                    type: 'number',
                    example: '8.67',
                  },
                  wind_speed: {
                    type: 'number',
                    example: '5.38',
                  },
                  wind_deg: {
                    type: 'integer',
                    format: 'int32',
                    example: '331',
                  },
                  wind_gust: {
                    type: 'number',
                    example: '14.16',
                  },
                  weather: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'integer',
                          format: 'int32',
                          example: '801',
                        },
                        main: {
                          type: 'string',
                          example: 'Clouds',
                        },
                        description: {
                          type: 'string',
                          example: 'algo de nubes',
                        },
                        icon: {
                          type: 'string',
                          example: '02d',
                        },
                      },
                    },
                  },
                  clouds: {
                    type: 'integer',
                    format: 'int32',
                    example: '18',
                  },
                  pop: {
                    type: 'integer',
                    format: 'int32',
                    example: '0',
                  },
                  uvi: {
                    type: 'number',
                    example: '3.12',
                  },
                },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Eata peticion va a devolver un codigo 404 cuando la city no sea valida o no este en la BD',
      properties: {
        err: {
          type: 'boolean',
        },
        message: {
          type: 'string',
          example: 'no se encuentra en la BD',
        },
      },
    },
  },

};

module.exports = schemaForecast;
