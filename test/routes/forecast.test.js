const { test } = require('tap');
const { build } = require('../helper');

test('default root route', async (t) => {
  const app = build(t);

  const forecast = await app.inject({
    method: 'GET',
    url: '/v1/forecast',
    remoteAddress: '181.9.166.234',
  });
  t.equal(forecast.statusCode, 200, 'Forecast devuelve status code de 200');
  t.type(JSON.parse(forecast.payload), 'object', 'Forecast devuelve un objeto');

  const forecast2 = await app.inject({
    method: 'GET',
    url: '/v1/forecast',
    remoteAddress: '192.168.0.1',
  });
  t.equal(forecast2.statusCode, 404, 'Forecast devuelve status code de 404');
  t.type(JSON.parse(forecast2.payload), 'object', 'Forecast devuelve objeto con ip lan');

  const forecastCity = await app.inject({
    method: 'GET',
    url: '/v1/forecast/1',
  });
  t.equal(forecastCity.statusCode, 200, 'Forecast devuelve status code de 200 con una city cargada');
  t.type(JSON.parse(forecastCity.payload), 'object', 'Forecast devuelve un objeto con una city cargada');

  const forecastCity2 = await app.inject({
    method: 'GET',
    url: '/v1/forecast/200',
  });

  t.equal(forecastCity2.statusCode, 404, 'Forecast devuelve status code de 404 con una city sin cargar');
  t.type(JSON.parse(forecastCity2.payload), 'object', 'Forecast devuelve un objeto con una city sin cargar');
});
