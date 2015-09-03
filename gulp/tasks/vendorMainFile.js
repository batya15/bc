"use strict";
var mainBowerFiles = require('main-bower-files'),
    gulp = require('gulp'),
    gulpFilter = require('gulp-filter'),
    watch = require('gulp-watch'),
    config = require('gulp/config/gulp.json');

var FILE_MASK = '.';

var filterJS = gulpFilter('*.js', {restore: true}),
    filterCss = gulpFilter(['*.css', '*.scss', '*.sass'], {restore: true}),
    filterFont = gulpFilter(['*.eot', '*.svg', '*.ttf', '*.woff', '*.woff2'], {restore: true});

function vendorFilter(done) {
    return gulp.src(mainBowerFiles({paths: FILE_MASK}))
        .pipe(filterJS)
        .pipe(gulp.dest(config.path.src + '/vendor/js'))
        .pipe(filterJS.restore)
        .pipe(filterCss)
        .pipe(gulp.dest(config.path.src + '/vendor/styles'))
        .pipe(filterCss.restore)
        .pipe(filterFont)
        .pipe(gulp.dest(config.path.src + '/vendor/fonts'))
        .pipe(filterFont.restore)
        .on('end', function () {
            if (typeof done === 'function') {
                done();
            }
        });
}

module.exports = function vendorMainFile(done) {
    if (typeof done === 'function') {
        return vendorFilter(done)
    }
};