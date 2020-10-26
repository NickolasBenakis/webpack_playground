const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isAnalyzer = require('./isAnalyzer');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

const htmlGenerator = new HtmlWebpackPlugin({
  title: 'my webpack app',
  template: 'template/index.html',
});

const bundleAnalyzer = isAnalyzer() ? new BundleAnalyzerPlugin() : () => {};

const plugins = [
  new ManifestPlugin(),
  htmlGenerator,
  bundleAnalyzer,
  new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
];

module.exports = plugins;
