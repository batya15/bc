"use strict";
var gulp = require('gulp'),
    config = require('gulp/config/gulp.json'),
    minifyHTML = require('gulp-minify-html');

var FILE_MASK = config.path.temp + '/**/*.html';

module.exports = function copyStatic(done) {
    return gulp.src(FILE_MASK, {base: config.path.temp})
        .pipe(minifyHTML({
            empty: true
        }))
        .pipe(gulp.dest(config.path.build))
        .on('end', function () {
            if (typeof done === 'function') {
                done();
            }
        });
};