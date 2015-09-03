"use strict";
var gulp = require('gulp'),
    zopfli = require("gulp-zopfli"),
    config = require('gulp/config/gulp.json');

var FILE_MASK = config.path.build + '/**/*.{html,css,js}';

function gZip(done) {
    return gulp.src(FILE_MASK)
        .pipe(zopfli())
        .pipe(gulp.dest(config.path.build))
        .on('end', function () {
            if (typeof done === 'function') {
                done();
            }
        });
}

module.exports = function gzipAllFile(done) {
    if (typeof done === 'function') {
        return gZip(done)
    }
};