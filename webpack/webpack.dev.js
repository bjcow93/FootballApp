const webpack = require('webpack'),
      {merge} = require('webpack-merge'),
      common = require('./webpack.common.js'),
      path = require('path');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    // publicPath: 'http://localhost:5000/frontend/public/',
    // publicPath: '/',
    contentBase: path.resolve(__dirname, '..', 'frontend', 'public'),
    compress: true,
    port: 5000,
    writeToDisk: true,
    open: true,
    watchContentBase: true,
    inline: true,
    liveReload: true,
    // proxy: [
    //   {
    //     context: ['/api', '/auth'],
    //     target: 'http://localhost:5000',
    //     secure: false
    //   }
    // ]
  },
});