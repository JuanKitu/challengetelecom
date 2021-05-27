const { test } = require('tap');
const { build } = require('../helper');

test('default root route', async (t) => {
  const app = build(t);
  const current = await app.inject({
    method: 'GET',
    url: '/v1/current',
    remoteAddress: '186.12.96.29',
  });
  t.equal(current.statusCode, 200, 'Current devuelve status code de 200');
  t.type(JSON.parse(current.payload), 'object', 'Current devuelve un objeto');

  const current2 = await app.inject({
    method: 'GET',
    url: '/v1/current',
    remoteAddress: '127.0.0.1',
  });
  t.equal(current2.statusCode, 404, 'Current devuelve status code de 404 con ip lan');
  t.type(JSON.parse(current2.payload), 'object', 'Current devuelve objeto con ip lan');

  const currentCity = await app.inject({
    method: 'GET',
    url: '/v1/current/1',
  });
  t.equal(currentCity.statusCode, 200, 'Current devuelve status code de 200 con una city cargada');
  t.type(JSON.parse(currentCity.payload), 'object', 'Current devuelve objeto con una city cargada');

  const currentCity2 = await app.inject({
    method: 'GET',
    url: '/v1/current/100',
  });
  t.equal(currentCity2.statusCode, 404, 'Current devuelve status code de 404 con una city sin cargar');
  t.type(JSON.parse(currentCity2.payload), 'object', 'Current devuelve objeto con una city sin cargar');
});
