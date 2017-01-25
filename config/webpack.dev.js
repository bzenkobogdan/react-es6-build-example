var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        'index': [
            'webpack-hot-middleware/client',
            './app/index.js'
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});