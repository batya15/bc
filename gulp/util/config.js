'use strict';

var config = require('gulp/config/gulp');
var isRelease = false;

module.exports = {
    release: function setReleaseBuild (cb) {
        isRelease = true;
        cb();
    },
    isRelease: function () {
        return isRelease;
    },
    getConfig: function () {
        return config;
    }
};