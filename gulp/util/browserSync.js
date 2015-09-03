'use strict';

var browserSync = require('browser-sync').create(),
    config = require('gulp/config/gulp');


module.exports = {
    init: function () {
        browserSync.init({
            server: {
                baseDir: config.path.build
            }
        });
    },
    reload: browserSync.reload
};