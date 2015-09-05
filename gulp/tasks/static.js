"use strict";
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    config = require('gulp/config/gulp.json');

var FILE_MASK = config.path.src + '/**/*.{html,css,js}';

function copyStatic(done) {
    return gulp.src(FILE_MASK, {base: config.path.src})
        .pipe(gulp.dest(config.path.build))
        .on('end', function () {
            if (typeof done === 'function') {
                done();
            }
        });
}

module.exports = function staticCopy(done) {
    if (typeof done === 'function') {
        return copyStatic(done)
    }

    if (done === 'watch') {
        console.info('register watcher static copy');
        watch(FILE_MASK, {verbose: true}, copyStatic);
    } else {
        throw new Error('Wrong call tasks');
    }
};