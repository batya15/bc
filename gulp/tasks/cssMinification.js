"use strict";
var gulp = require('gulp'),
    config = require('gulp/config/gulp.json'),
    uglifycss = require('gulp-uglifycss'),
    cssList = require('gulp/util/cssList'),
    concatCss = require('gulp-concat-css');

module.exports = function cssMinification(done) {
    return gulp.src(cssList.list())
        .pipe(concatCss("styles.css"))
        .pipe(uglifycss())
        .pipe(gulp.dest(config.path.build))
        .on('end', function () {
            if (typeof done === 'function') {
                done();
            }
        });
};
