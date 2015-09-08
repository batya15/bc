"use strict";
var gulp = require('gulp'),
    clear = require('gulp/tasks/clear'),
    config = require('gulp/util/config'),
    vendorMainFile = require('gulp/tasks/vendorMainFile'),
    dependenciesInstall = require('gulp/tasks/dependencies'),
    statics = require('gulp/tasks/static'),
    sass = require('gulp/tasks/sass'),
    javascript = require('gulp/tasks/javascript'),
    jade2HTML = require('gulp/tasks/jadeToHtml'),
    gzip = require('gulp/tasks/gzip'),
    jsMinification = require('gulp/tasks/jsMinification'),
    cssMinification = require('gulp/tasks/cssMinification'),
//staticMinification = require('gulp/tasks/staticMinification'),
    renameBuildPath = require('gulp/util/renameBuildPath'),
    browserSync = require('gulp/util/browserSync');

function watchers() {
    browserSync.init();
    statics('watch');
    sass('watch');
    javascript('watch');
    jade2HTML('watch');
}

gulp.task('build', gulp.series(
        clear,
        dependenciesInstall,
        vendorMainFile,
        statics,
        jade2HTML,
        sass,
        javascript
    )
);

gulp.task('release', gulp.series(
        config.release,
        'build',
        renameBuildPath,
        /*staticMinification,*/
        jsMinification,
        cssMinification,
        gzip/*,
         RemoveBuildAndRenameRelease*/
    )
);

gulp.task('default', gulp.series('build', watchers));
