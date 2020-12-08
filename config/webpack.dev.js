const webpack = require('webpack'),
      {merge} = require('webpack-merge'),
      common = require('./webpack.common.js'),
      path = require('path');


 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
    contentBase: path.resolve(__dirname, '..', 'frontend', 'public'),
    // compress: true,
    port: 3030,
    // proxy: [
    //   {
    //     context: ['/api', '/auth'],
    //     target: 'http://localhost:3030',
    //     secure: false
    //   }
    // ],
    // target: 'web',
    open: true,
    watchContentBase: true,
    inline: true,
    hot: true
  },
  watch: true
});