const path = require('path');
const isDev = require('./config/isDev');
const rules = require('./config/rules');
const plugins = require('./config/plugins');

const distFolder = path.join(__dirname, 'dist');
const sourceMaps = isDev() ? 'eval-source-map' : null;
const mode = isDev() ? 'development' : 'production';
const PORT = 9000;

module.exports = {
  mode,
  devtool: sourceMaps,
  devServer: {
    contentBase: distFolder,
    compress: true,
    port: PORT
  },
  entry: {
    app: './src/app/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: distFolder,
  },
  module: {
    rules
  },
  plugins,
  optimization: {
    runtimeChunk: 'single'
  }
};
