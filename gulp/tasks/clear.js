"use strict";

var gulp = require('gulp'),
    config = require('gulp/config/gulp'),
    fs = require('fs-extra');

module.exports = {
    all: function clear(done) {
        fs.removeSync(config.path.build);
        fs.removeSync(config.path.temp);
        done()
    },
    temp: function clear(done) {
        fs.removeSync(config.path.temp);
        done()
    }
};

