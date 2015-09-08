'use strict';

var fs = require('fs'),
    config = require('gulp/config/gulp'),
    MAIN_DIR_TEMP = process.cwd() + '/' + config.path.temp,
    MAIN_DIR_BUILD = process.cwd() + '/' + config.path.build;

module.exports = function build2temp(done) {
    fs.rename(MAIN_DIR_BUILD, MAIN_DIR_TEMP, done);
};