const { dataIp, getTiempoActual } = require('../function/funcionesBasicas');

const controller = {};
controller.getCurrent = async (request, reply) => {
  const { ip } = request;
  await dataIp(ip).then(async (data) => {
    if (data.status !== 'fail') {
      await getTiempoActual(data.lat, data.lon).then((geo) => {
        reply.status(200).send({
          err: false,
          city: data,
          current: geo,
        });
      });
    }
    return reply.status(404).send({
      err: true,
      data,
    });
  });
};
module.exports = controller;
