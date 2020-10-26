const isAnalyzer = function (env = process.env.ENV) { return env === 'analyzer'};
module.exports = isAnalyzer;
