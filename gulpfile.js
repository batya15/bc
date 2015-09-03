"use strict";
var gulp = require('gulp'),
    clear = require('./gulp/tasks/clear'),
    statics = require('./gulp/tasks/static'),
    sass = require('./gulp/tasks/sass'),
    gzip = require('./gulp/tasks/gzip'),
    webpack = require('./gulp/tasks/webpack'),
    jsMinification = require('./gulp/tasks/jsMinification'),
    cssMinification = require('./gulp/tasks/cssMinification'),
    vendorMainFile = require('./gulp/tasks/vendorMainFile'),
    dependenciesInstall = require('./gulp/tasks/dependencies'),
    browserSync = require('./gulp/util/browserSync');


function watchers() {
    browserSync.init();
    statics('watch');
    sass('watch');
    webpack('watch');
}

gulp.task('build', gulp.series(clear, dependenciesInstall, vendorMainFile, statics, sass, webpack));
gulp.task('release', gulp.series('build', jsMinification, cssMinification, gzip));
gulp.task('default', gulp.series('build', watchers));
