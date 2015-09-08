"use strict";
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('gulp/util/browserSync'),
    configUtil = require('gulp/util/config'),
    config = require('gulp/config/gulp.json');

var FILE_MASK = [config.path.src + '/**/*.{sass,scss}', '!' + config.path.bower];

function sassTask(done) {
    var eventName = configUtil.isRelease()?  '_error' : 'error';

    return gulp.src(FILE_MASK)
        .pipe(sourcemaps.init())
        .pipe(sass({
            quiet: true,
            includePaths: [config.path.src + '/']
        }).on(eventName, sass.logError))
        .pipe(postcss([autoprefixer({browsers: ['last 2 version']})]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.path.build))
        .on('end', function () {
            if (typeof done === 'function') {
                done();
            }
        });
}

module.exports = function sassCompile(done) {
    if (typeof done === 'function') {
        return sassTask(done)
    }

    if (done === 'watch') {
        console.info('register watcher sass compile');
        watch(FILE_MASK, {verbose: true}, sassTask).on('change', browserSync.reload);
    } else {
        throw new Error('Wrong call tasks');
    }
};