const { dataIp, getTiempoDias } = require('../function/funcionesBasicas');

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

module.exports = controller;
