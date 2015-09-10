"use strict";
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('gulp/util/browserSync'),
    babel = require("gulp-babel"),
    gulpFilter = require('gulp-filter'),
    configUtil = require('gulp/util/config'),
    through = require('through2'),
    config = require('gulp/config/gulp.json');

var FILE_MASK = [config.path.src + '/**/*.{js,jsx}'];

function javascriptCompile(head, done) {
    var filterVendor = gulpFilter(
        [
            '**/*.{js,jsx}',
            '!**/*.es5.js',
            '!vendor/**/*.{js,jsx}'
        ], {restore: true}
    );

    return head
        .pipe(filterVendor)
        .pipe(sourcemaps.init())
        .pipe(babel({
            modules: 'amd',
            moduleIds: true
        }))
        .pipe(sourcemaps.write())
        .pipe(through.obj(function(file, enc, cb) {
            if (configUtil.isRelease()) {
                file.contents = new Buffer(String(file.contents).replace(/'css!.*'/g, '\'css\''));
            }
            this.push(file);
            cb();
        }))
        .pipe(filterVendor.restore)
        .pipe(gulp.dest(config.path.build))
        .on('end', function () {
            if (typeof done === 'function') {
                done();
            }
        });
}

module.exports = function javascript(done) {
    if (typeof done === 'function') {
        return javascriptCompile(gulp.src(FILE_MASK), done);
    }

    if (done === 'watch') {
        console.info('register watcher javascript compile');
        javascriptCompile(
            watch(FILE_MASK, {verbose: true}, browserSync.reload)
        );
    } else {
        throw new Error('Wrong call tasks');
    }
};