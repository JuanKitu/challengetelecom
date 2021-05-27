const {
    dataIp,
    getTiempoActual,
    getCity,
    dataLatLon,
} = require('../function/funcionesBasicas');

const controller = {};
controller.getCurrent = async(request, reply) => {
    const { ip } = request;
    await dataIp(ip).then(async(data) => {
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
controller.getCurrentCity = async(request, reply) => {
    const { city } = request.params;
    const ciudad = getCity(city);
    if (ciudad) {
        await getTiempoActual(ciudad.latitud, ciudad.longitud).then((async(geo) => {
            await dataLatLon(ciudad.latitud, ciudad.longitud).then((find) => reply.status(200).send({
                err: false,
                city: find,
                current: geo,
            }));
        }));
    }
    return reply.status(404).send({
        err: true,
        message: 'no se encuentra en la BD',
    });
};
module.exports = controller;