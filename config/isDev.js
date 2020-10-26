const isDev = function (env = process.env.ENV) { return env === 'dev'};
module.exports = isDev;
