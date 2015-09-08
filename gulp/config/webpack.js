var webpack = require('webpack');

module.exports = {
    entry: './temp/app.js',
    resolve: {
        root: 'temp',
        alias: {
            'react2': 'vendor/js/react',
            'reflux': 'vendor/js/reflux'
        }
    },
    output: {
        filename: 'app.js'
    },
    module: {
        noParse: /.*\/vendor\/.*/
    }
};