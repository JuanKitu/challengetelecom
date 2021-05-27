const fetch = require('node-fetch');

const ubicacionCiudad = [{
  id: 1,
  latitud: -34.9214,
  longitud: -57.9544,
  nombre: 'La Plata',
},
{
  id: 2,
  latitud: -31.3436,
  longitud: -59.4464,
  nombre: 'Bovril',
},
{
  id: 3,
  latitud: 59.3328,
  longitud: 18.0645,
  nombre: 'Estocolmo',
},
{
  id: 4,
  latitud: 51.2256,
  longitud: 6.78278,
  nombre: 'Dusseldorf',
},
];

function dataIp(ip) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const ipApi = `http://ip-api.com/json/${ip}`;
    await fetch(ipApi).then((res) => res.json()).then((body) => resolve(body));
  });
}

function getTiempoActual(latitud, longitud) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const tiempoConfig = {
      latitud,
      longitud,
      apiID: 'a63072e3e1e01801c117e4a397ba5302',
      exclude: 'hourly,minutely,daily',
      units: 'metric',
      lang: 'es',
    };
    const tiempo = `https://api.openweathermap.org/data/2.5/onecall?lat=${tiempoConfig.latitud}&lon=${tiempoConfig.longitud}&exclude=${tiempoConfig.exclude}&units=${tiempoConfig.units}&lang=es&appid=${tiempoConfig.apiID}`;
    await fetch(tiempo).then((res) => res.json()).then((geo) => {
      resolve(geo);
    });
  });
}

function getTiempoDias(latitud, longitud) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const tiempoConfig = {
      latitud,
      longitud,
      apiID: 'a63072e3e1e01801c117e4a397ba5302',
      exclude: 'hourly,minutely,current',
      units: 'metric',
      lang: 'es',
    };
    const tiempo = `https://api.openweathermap.org/data/2.5/onecall?lat=${tiempoConfig.latitud}&lon=${tiempoConfig.longitud}&exclude=${tiempoConfig.exclude}&units=${tiempoConfig.units}&lang=es&appid=${tiempoConfig.apiID}`;
    await fetch(tiempo).then((res) => res.json()).then((geo) => {
      resolve(geo);
    });
  });
}

function getCity(city) {
  let ciudadEncontrada;
  ubicacionCiudad.forEach((ciudad) => {
    if (ciudad.id === parseInt(city, 10)) {
      ciudadEncontrada = ciudad;
    }
  });
  return ciudadEncontrada;
}
module.exports = {
  dataIp, getTiempoActual, getTiempoDias, getCity,
};
