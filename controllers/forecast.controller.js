const {
  dataIp,
  getTiempoDias,
  getCity,
  dataLatLon,
} = require('../function/funcionesBasicas');

const controller = {};

controller.getForecast = async (request, reply) => {
  const { ip } = request;
  await dataIp(ip).then(async (data) => {
    if (data.status !== 'fail') {
      await getTiempoDias(data.lat, data.lon).then((geo) => reply.status(200).send({
        err: false,
        city: data,
        daily: geo,
      }));
    }
    return reply.status(404).send({
      err: true,
      data,
    });
  });
};

controller.getForecastCity = async (request, reply) => {
  const { city } = request.params;
  const ciudad = getCity(city);
  if (ciudad) {
    await getTiempoDias(ciudad.latitud, ciudad.longitud).then(async (geo) => {
      await dataLatLon(ciudad.latitud, ciudad.longitud).then((find) => {
        console.log('datos del find: ', find);
        reply.status(200).send({
          err: false,
          city: find,
          daily: geo,
        });
      });
    });
  }
  return reply.status(404).send({
    err: true,
    message: 'no se encuentra en la BD',
  });
};

module.exports = controller;
