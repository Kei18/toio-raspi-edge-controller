const pino = require('pino');

const sleep = async (ms) => {
  return new Promise(r => setTimeout(r, ms));
};

const getLogger = () => {
  return pino({
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: "yyyy-mm-dd HH:MM:ss.l",
        ignore: 'pid,hostname',
        singleLine: true
      }
    },
  });
};

module.exports = {
  sleep,
  getLogger,
};
