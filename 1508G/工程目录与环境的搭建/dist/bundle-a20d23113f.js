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

require('./directive/body');

require('./directive/body-left');

require('./directive/body-right');

exports.default = angular.module('bootstrapApp', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'mainController', 'header', 'body', 'bodyLeft', 'bodyRight']).config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('startExam', {
                url: '/startexam',
                templateUrl: '../../component/routertemplate/startexam.html',
                controller: ['$scope', function ($scope) {}]
        }).state('historyPaper', {
                url: '/historypaper',
                templateUrl: '../../component/routertemplate/historypaper.html',
                controller: ['$scope', function ($scope) {}]
        }).state('toolDownload', {
                url: '/tooldownload',
                templateUrl: '../../component/routertemplate/tooldownload.html',
                controller: ['$scope', function ($scope) {}]
        }).state('uploadQusetion', {
                url: '/uploadqusetion',
                templateUrl: '../../component/routertemplate/uploadqusetion.html',
                controller: ['$scope', function ($scope) {}]
        }).state('addAlbum', {
                url: '/addalbum',
                templateUrl: '../../component/routertemplate/addalbum.html',
                controller: ['$scope', function ($scope) {}]
        }).state('photoList', {
                url: '/photolist',
                templateUrl: '../../component/routertemplate/photolist.html',
                controller: ['$scope', function ($scope) {}]
        }).state('addPhoto', {
                url: '/addphoto',
                templateUrl: '../../component/routertemplate/addphoto.html',
                controller: ['$scope', function ($scope) {}]
        });
}]).run([function () {}]);

},{"./controller/mainController":3,"./directive/body":6,"./directive/body-left":4,"./directive/body-right":5,"./directive/header":7}],3:[function(require,module,exports){
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
exports.default = angular.module('bodyLeft', []).directive('contentLeft', function () {
    return {
        restrict: 'ECMA',
        templateUrl: '../../../component/template/bodyleft.html',
        controller: ['$scope', function ($scope) {
            $scope.oneAtATime = true;
            $scope.listData = [{
                title: '考试管理',
                value: ['开始考试', '历史试卷']
            }, {
                title: '工具下载',
                value: ['学习工具下载']
            }, {
                title: '错题管理',
                value: ['上传错题图片']
            }, {
                title: '图片管理',
                value: ['添加相册', '相册列表', '添加图片']
            }];
        }]
    };
});

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = angular.module('bodyRight', []).directive('contentRight', function () {
    return {
        restrict: 'ECMA',
        templateUrl: '../../../component/template/bodyright.html',
        controller: [function () {}]
    };
});

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = angular.module('body', []).directive('content', function () {
    return {
        restrict: 'ECMA',
        templateUrl: '../../../component/template/body.html',
        controller: [function () {}]
    };
});

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
'use strict';

require('./app');

var _rem = require('../base/rem');

var _rem2 = _interopRequireDefault(_rem);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _rem2.default)(13.66);
angular.bootstrap(document.documentElement, ['bootstrapApp']);

},{"../base/rem":1,"./app":2}]},{},[8]);
