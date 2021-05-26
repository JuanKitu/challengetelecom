const fetch = require('node-fetch');

function dataIp(ip) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const ipApi = `http://ip-api.com/json/${ip}`;
    await fetch(ipApi).then((res) => res.json()).then((body) => resolve(body));
  });
}

module.exports = { dataIp };
