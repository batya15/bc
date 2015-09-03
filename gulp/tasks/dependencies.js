"use strict";
var gulp = require('gulp'),
    install = require('gulp-install');

module.exports = function installModules() {
    return gulp.src(['bower.json'])
        .pipe(install());
};