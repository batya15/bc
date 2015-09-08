"use strict";
var gulp = require('gulp'),
    config = require('gulp/config/gulp.json'),
    uglifycss = require('gulp-uglifycss'),
    concatCss = require('gulp-concat-css');


var FILE_MASK = config.path.temp + '/**/*.css';

function cssMinification(done) {
    return gulp.src(FILE_MASK)
        .pipe(concatCss("styles.css"))
        .pipe(uglifycss())
        .pipe(gulp.dest(config.path.build))
        .on('end', function () {
            if (typeof done === 'function') {
                done();
            }
        });
}

module.exports = function styleMinification(done) {
    if (typeof done === 'function') {
        return cssMinification(done)
    }
};