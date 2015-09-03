"use strict";

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    webpack = require('gulp-webpack'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('gulp/util/browserSync'),
    config = require('gulp/config/gulp.json');

var FILE_MASK = [config.path.src + '/**/*.js', '!' + config.path.bower];

function webpackCompile(done) {
    return gulp.src(FILE_MASK)
        .pipe(webpack(require('gulp/config/webpack')))
        .pipe(gulp.dest(config.path.build))
        .on('end', function () {
            if (typeof done === 'function') {
                done();
            }
        });
}

module.exports = function webPack(done) {
    if (typeof done === 'function') {
        return webpackCompile(done)
    }

    if (done === 'watch') {
        console.info('register watcher webpack compile');
        watch(FILE_MASK, {verbose: true}, webpackCompile).on('change', browserSync.reload);
    } else {
        throw new Error('Wrong call tasks');
    }
};