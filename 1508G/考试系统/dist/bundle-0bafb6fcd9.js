(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function rem (value){
    document.documentElement.style.fontSize = window.screen.width / value + 'px';
    window.onresize = function(){
        document.documentElement.style.fontSize = window.screen.width / value + 'px';
    }    
}

module.exports = rem;
},{}],2:[function(require,module,exports){
var app = angular.module('app',['ui.router'])
module.exports = app;
},{}],3:[function(require,module,exports){
app.controller('main',['$scope',function($scope){
    $scope.msg = 'Hello project!';
}])
},{}],4:[function(require,module,exports){
var rem = require('../base/rem.js');
var app = require('./app.js');
require('./controller/main.js');
rem(13.66);
},{"../base/rem.js":1,"./app.js":2,"./controller/main.js":3}]},{},[4]);
