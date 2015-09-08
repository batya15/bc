"use strict";
var gulp = require('gulp'),
    clear = require('./gulp/tasks/clear'),
    vendorMainFile = require('./gulp/tasks/vendorMainFile'),
    dependenciesInstall = require('./gulp/tasks/dependencies'),
    statics = require('./gulp/tasks/static'),
    sass = require('./gulp/tasks/sass'),
    javascript = require('./gulp/tasks/javascript'),
    gzip = require('./gulp/tasks/gzip'),
    jsMinification = require('./gulp/tasks/jsMinification'),
    cssMinification = require('./gulp/tasks/cssMinification'),
    browserSync = require('./gulp/util/browserSync');

function watchers() {
    browserSync.init();
    statics('watch');
    sass('watch');
    javascript('watch');
}

gulp.task('build', gulp.series(clear, dependenciesInstall, vendorMainFile, statics, sass, javascript));
//gulp.task('release', gulp.series('build', jsMinification, cssMinification, gzip));
gulp.task('default', gulp.series('build', watchers));
