(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var js1 = require('./js1');
var js2 = require('./js2');
var js3 = require('./js3');


js2();
js1();
js3();
},{"./js1":2,"./js2":3,"./js3":4}],2:[function(require,module,exports){
function fn(){
    console.log('js1234')
}

module.exports = fn;
},{}],3:[function(require,module,exports){
function fn(){
    console.log('js2')
}

module.exports = fn;
},{}],4:[function(require,module,exports){
function fn(){
    console.log('js3')
}

module.exports = fn;
},{}]},{},[1]);
