"use strict";
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('gulp/util/browserSync'),
    config = require('gulp/config/gulp.json');

var FILE_MASK = config.path.src + '/**/*.{html,css}';

function copyStatic(head, done) {
    return head
        .pipe(gulp.dest(config.path.build))
        .on('end', function () {
            if (typeof done === 'function') {
                done();
            }
        });
}

module.exports = function staticCopy(done) {
    if (typeof done === 'function') {
        return copyStatic(gulp.src(FILE_MASK, {base: config.path.src}), done)
    }

    if (done === 'watch') {
        console.info('register watcher static copy');
        copyStatic(watch(FILE_MASK, {verbose: true}, browserSync.reload));
    } else {
        throw new Error('Wrong call tasks');
    }
};