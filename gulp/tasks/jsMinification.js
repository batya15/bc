"use strict";
var gulp = require('gulp'),
    config = require('gulp/config/gulp.json'),
    webpack = require('gulp-webpack'),
    uglify = require('gulp-uglifyjs');


var FILE_MASK = config.path.build + '/app.js';

function jsMinification(done) {
    return gulp.src(FILE_MASK)
        .pipe(webpack(require('gulp/config/webpack')))
        .pipe(uglify())
        .pipe(gulp.dest(config.path.build))
        .on('end', function () {
            if (typeof done === 'function') {
                done();
            }
        });
}

module.exports = function scriptsMinification(done) {
    if (typeof done === 'function') {
        return jsMinification(done)
    }
};