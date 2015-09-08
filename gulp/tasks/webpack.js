"use strict";

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    webpack = require('gulp-webpack'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('gulp/util/browserSync'),
    config = require('gulp/config/gulp.json');

var FILE_MASK = [config.path.src + '/**/*.js', '!' + config.path.bower];

module.exports = function webpackCompile(done) {
    return gulp.src(FILE_MASK)
        .pipe(webpack(require('gulp/config/webpack')))
        .pipe(gulp.dest(config.path.build))
        .on('end', function () {
            if (typeof done === 'function') {
                done();
            }
        });
};
