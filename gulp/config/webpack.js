var webpack = require("webpack");

module.exports = {
    entry: './src/app.js',
    devtool: 'sourcemap',
    resolve: {
        modulesDirectories: ['bower_components'],
        root: 'src',
        alias: {
            'react': 'vendor/alias/react.js',
            'reflux': 'vendor/alias/reflux.js'
        }
    },
    output: {
        filename: 'app.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: {compact: false}}
        ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
};