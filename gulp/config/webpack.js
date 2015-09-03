module.exports = {
    entry: './src/app.js',
    devtool: '[inline-]source-map',
    output: {
        filename: 'app.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: '/node_modules/'}
        ]
    }
};