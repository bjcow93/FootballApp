const webpack = require('webpack'),
      path = require('path'),
      {CleanWebpackPlugin} = require('clean-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '..', 'frontend', 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, '..', 'frontend', 'public'),
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'frontend', 'src', 'index.ejs'),
            scriptLoading: 'defer'
        }),
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
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        // plugins: ['@babel/plugin-syntax-jsx']
                    }

                }
            }
        ]
    },
    // resolve: {
    //     alias: {

    //   }
    // },
    resolve: {
        extensions: ['.jsx', '.js', '*', '.ejs']
    }
};