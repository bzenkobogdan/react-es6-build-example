var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var poststylus = require('poststylus');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, './../dist'),
        filename: '[name].bundle[hash].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.(styl|css)$/,
                loader: 'style!css!stylus?resolve url'
            },
        ]
    },
    stylus: {
        use: [
            poststylus(['autoprefixer'])
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        
        new CopyWebpackPlugin([{
            from: 'app/favicon.ico'
        }]),
        
        new HtmlWebpackPlugin({
            template: './app/index.ejs',
            faviconUrl: 'favicon.ico'
        })
    ]
};