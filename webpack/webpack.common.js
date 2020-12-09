const webpack = require('webpack'),
      path = require('path');
    //   HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: path.resolve(__dirname, '..', 'frontend', 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, '..', 'frontend', 'public', 'js'),
        filename: 'bundle.js'
    },
    plugins: []
    ,
    resolve: {
        extensions: ['.jsx', '.js', '*', '.ejs']
    },
    module: {
        rules: [
            {
                test: /\.css?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)/i
            },
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    performance: { hints: false }
    // resolve: {
    //     alias: {

    //   }
    // },
    // watch: true
};