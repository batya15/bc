"use strict";

var gulp = require('gulp'),
    config = require('gulp/config/gulp'),
    rimraf = require('rimraf');

module.exports = function clear(done) {
    return rimraf(config.path.build, done);
};

