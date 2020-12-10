const webpack = require('webpack'),
      {merge} = require('webpack-merge'),
      common = require('./webpack.common.js'),
      path = require('path');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    // inline: false,
    // liveReload: false,
    // hot: false,
    // publicPath: 'http://localhost:5000/frontend/public/',
    // publicPath: '/',
    contentBase: path.resolve(__dirname, '..', 'frontend', 'public'),
    compress: true,
    port: 5000,
    writeToDisk: true,
    open: true,
    watchContentBase: true,
    proxy: { 
      '/api/**': { 
        target: 'http://localhost:3030', 
        // secure: false 
      } 
    },
    // proxy: {
    //   '/api/*': {
    //     target: 'http://[::1]:3030',
    //     // changeOrigin: true
    //   }
    // }
  },
});