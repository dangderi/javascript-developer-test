const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
    const arnieQuotes = await Promise.all(
        urls.map(async (url) => {
          const res = await httpGet(url);
          const message = JSON.parse(res.body).message;

          if (res.status === 200) {
            return { "Arnie Quote": message };
          } else {
            return { "FAILURE": message };
          }
        })
    );
  return arnieQuotes;
};

module.exports = {
  getArnieQuotes,
};
