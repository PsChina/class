/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('入口一');

var a = 10; // bable在做的事  => var a = 10;   es6 => es5

var Point = function () {
    // es6的语法更好理解
    function Point(x, y) {
        _classCallCheck(this, Point);

        // 构造器
        this.x = x;
        this.y = y;
    }

    _createClass(Point, [{
        key: 'toString',
        value: function toString() {
            // 将一个点 转换成字符串
            return '(' + this.x + ',' + this.y + ')';
        }
    }]);

    return Point;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/Users/Administrator/Desktop/1512C/webpack/babel-loader/entry2.js: Unexpected token (14:26)\n\n\u001b[0m \u001b[90m 12 | \u001b[39m\u001b[36mconst\u001b[39m message \u001b[33m=\u001b[39m \u001b[32m'Hello babel'\u001b[39m\n \u001b[90m 13 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 | \u001b[39m\u001b[36mconst\u001b[39m firstName \u001b[33m=\u001b[39m message\u001b[33m?\u001b[39m\u001b[33m.\u001b[39mbody\u001b[33m?\u001b[39m\u001b[33m.\u001b[39muser\u001b[33m?\u001b[39m\u001b[33m.\u001b[39mfirstName\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 15 | \u001b[39m\u001b[0m\n");

/***/ })
/******/ ]);