var webpack = require('webpack'),
    fs = require('fs'),
    config = require('gulp/config/gulp.json'),
    requireJsConfig;

(function () {
    //todo: this is BIG hack read config file requireJs
    var require = {
            config: function (obj) {
                requireJsConfig = obj;
            }
        },
        fileConfig = fs.readFileSync(config.path.src + '/require-config.es5.js', 'utf8');
        eval(fileConfig);
})();

module.exports = {
    entry: 'app.js',
    resolve: {
        root: 'temp',
        alias: requireJsConfig.paths
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        noParse: /.*\/vendor\/.*/
    }
};