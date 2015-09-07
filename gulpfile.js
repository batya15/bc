"use strict";
var gulp = require('gulp'),
    clear = require('./gulp/tasks/clear'),
    statics = require('./gulp/tasks/static'),
    sass = require('./gulp/tasks/sass'),
    gzip = require('./gulp/tasks/gzip'),
    jsMinification = require('./gulp/tasks/jsMinification'),
    cssMinification = require('./gulp/tasks/cssMinification'),
    vendorMainFile = require('./gulp/tasks/vendorMainFile'),
    dependenciesInstall = require('./gulp/tasks/dependencies'),
    webpack = require('./gulp/tasks/webpack'),
    javascript = require('./gulp/tasks/javascript'),
    browserSync = require('./gulp/util/browserSync');


function watchers() {
    browserSync.init();
    statics('watch');
    sass('watch');
    javascript('watch');
}

gulp.task('build', gulp.series(clear, dependenciesInstall, vendorMainFile, statics, sass, javascript/*, webpack*/));
//gulp.task('release', gulp.series('build', jsMinification, cssMinification, gzip));
gulp.task('default', gulp.series('build', watchers));
