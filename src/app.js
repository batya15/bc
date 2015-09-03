import N from './js/module.js';

var n = new N('bad22tya');
var r = document.querySelector('.man');
setTimeout(function() {
    r.style.width = '600px';
}, 1500);
console.log(n.toString(), r);