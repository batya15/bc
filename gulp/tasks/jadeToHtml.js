"use strict";
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    jade = require('gulp-jade'),
    browserSync = require('gulp/util/browserSync'),
    configUtil = require('gulp/util/config'),
    rename = require('gulp-rename'),
    config = configUtil.getConfig();

var FILE_MASK = [config.path.src + '/**/*.html.jade', '!' + config.bower];

function jadeToHtml(done) {
    return gulp.src(FILE_MASK)
        .pipe(jade({
            client: false, pretty: true,
            locals: {
                isRelease: configUtil.isRelease()
            }
        }))
        .pipe(rename({extname: ''}))
        .pipe(gulp.dest(config.path.build))
        .on('end', function () {
            if (typeof done === 'function') {
                done();
            }
        });
}

module.exports = function jade2HTML(done) {
    if (typeof done === 'function') {
        return jadeToHtml(done)
    }

    if (done === 'watch') {
        console.info('register watcher sass compile');
        watch(FILE_MASK, {verbose: true}, jadeToHtml).on('change', browserSync.reload);
    } else {
        throw new Error('Wrong call tasks');
    }
};