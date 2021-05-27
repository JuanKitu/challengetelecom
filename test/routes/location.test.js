const { test } = require('tap');
const { build } = require('../helper');

test('Test unitario de location', async (t) => {
  const app = build(t);

  const location = await app.inject({
    method: 'GET',
    url: '/v1/location',
    remoteAddress: '186.12.96.29',
  });
  t.equal(location.statusCode, 200, 'location devuelve status code de 200');
  t.type(JSON.parse(location.payload), 'object', 'location devuelve objeto');

  const location2 = await app.inject({
    method: 'GET',
    url: '/v1/location',
    remoteAddress: '192.168.0.2',
  });
  t.equal(location2.statusCode, 404, 'location devuelve status code de 404');
  t.type(JSON.parse(location2.payload), 'object', 'Location devuelve objeto');
});
