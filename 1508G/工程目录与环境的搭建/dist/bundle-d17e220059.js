/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var require;var require;"use strict";

	(function e(t, n, r) {
	        function s(o, u) {
	                if (!n[o]) {
	                        if (!t[o]) {
	                                var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
	                        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
	                                var n = t[o][1][e];return s(n ? n : e);
	                        }, l, l.exports, e, t, n, r);
	                }return n[o].exports;
	        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
	                s(r[o]);
	        }return s;
	})({ 1: [function (require, module, exports) {
	                require('./controller/mainController');
	                require('./controller/mainController');
	                require('./directive/header');
	                angular.module('app', ['ui.router', 'mainController', 'header']).config([function () {}]).run([function () {}]);
	        }, { "./controller/mainController": 2, "./directive/header": 3 }], 2: [function (require, module, exports) {
	                angular.module('mainController', []).controller('main', ['$scope', function ($scope) {
	                        $scope.msg = 'ceshi';
	                }]);
	        }, {}], 3: [function (require, module, exports) {
	                angular.module('header', []).directive('top', function () {
	                        return {
	                                restrict: 'ECMA',
	                                templateUrl: '../../../component/template/top.html',
	                                controller: ['$scope', function ($scope) {
	                                        $scope.title = '头部1';
	                                }]
	                        };
	                });
	        }, {}], 4: [function (require, module, exports) {
	                require('./app');
	        }, { "./app": 1 }] }, {}, [4]);

/***/ })
/******/ ]);