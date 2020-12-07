const webpack = require('webpack'),
      path = require('path'),
      {CleanWebpackPlugin} = require('clean-webpack-plugin')
    // jsxplugin = require("@babel/plugin-syntax-jsx");

    //   HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'frontend', 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['js'] })

            //  new HtmlWebpackPlugin({
            //    title: 'Production'
            //  })
           ]
    ,
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
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        {
                            plugins: [
                                '@babel/plugin-proposal-class-properties'
                            ]
                        },
                        '@babel/preset-react'
                    ]
                },
            }
        ]
    },
    // resolve: {
    //     alias: {

    //   }
    // },
    resolve: {
        extensions: ['.jsx', '.js']
    },
};