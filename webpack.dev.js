const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '../dist',
  },
  devtool: 'eval-source-map',
  devServer: {
    publicPath: '/demo/',
    index: '/demo/index.html',
    port: 9090,
    writeToDisk: true,
  }
});