const fs = require('fs');
const pino = require('pino');

const sleep = async (ms) => {
  return new Promise(r => setTimeout(r, ms));
};

const isempty = (arr) => { return arr.length == 0; };

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
  isempty,
  getLogger,
};
