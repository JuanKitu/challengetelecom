const { dataIp } = require('../function/funcionesBasicas');

const controller = {};
controller.getLocation = async (request, reply) => {
  const { ip } = request;
  await dataIp(ip).then((data) => {
    if (data.status !== 'fail') {
      return reply.status(200).send({
        err: false,
        data,
      });
    }
    return reply.status(404).send({
      err: true,
      data,
    });
  });
};

module.exports = controller;
