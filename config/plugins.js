const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isAnalyzer = require('./isAnalyzer');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');

const htmlGenerator = new HtmlWebpackPlugin({
    title: 'my webpack app',
    template: 'template/index.html'
});

const bundleAnalyzer = isAnalyzer() ? new BundleAnalyzerPlugin() : () => {};

const manifestPlugin = new ManifestPlugin();

const plugins = [manifestPlugin, htmlGenerator, bundleAnalyzer];

module.exports = plugins;
