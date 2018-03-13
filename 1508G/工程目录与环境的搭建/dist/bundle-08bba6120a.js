(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (value) {
    document.documentElement.style.fontSize = window.screen.width / value + 'px';
    window.onresize = function () {
        document.documentElement.style.fontSize = window.screen.width / value + 'px';
    };
};

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

require('./controller/mainController');

require('./directive/header');

exports.default = angular.module('bootstrapApp', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'mainController', 'header']).config([function () {}]).run([function () {}]);

},{"./controller/mainController":3,"./directive/header":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = angular.module('mainController', []).controller('main', ['$scope', function ($scope) {}]);

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = angular.module('header', []).directive('top', function () {
    return {
        restrict: 'ECMA',
        templateUrl: '../../../component/template/top.html',
        controller: ['$scope', function ($scope) {
            $scope.user = {
                name: 'admin'
            };
        }]
    };
});

},{}],5:[function(require,module,exports){
'use strict';

require('./app');

var _rem = require('../base/rem');

var _rem2 = _interopRequireDefault(_rem);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _rem2.default)(13.66);
angular.bootstrap(document.documentElement, ['bootstrapApp']);

},{"../base/rem":1,"./app":2}]},{},[5]);
