var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var saveLicense = require('uglify-save-license');

var prodPlugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            screw_ie8: true
        },
        output: {
            comments: saveLicense
        }
    })
];

module.exports = webpackMerge(commonConfig, {
    name: 'client',
    devtool: 'source-map',
    output: {
        filename: '[name].js'
    },
    plugins: prodPlugins
});