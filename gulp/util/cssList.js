'use strict';
/**
 * List all css in module
**/

var list = [];

module.exports = {
    push: function (data) {
        var filename = data.request.replace(/^css!\.{0,1}/, '');
        filename = filename[0] === '/' ? filename : '/' + filename;
        list.push(data.context + filename + '.css');
        return list;
    },
    list: function () {
        return list;
    }
};