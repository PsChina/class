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

require('./directive/pagecontrol');

exports.default = angular.module('bootstrapApp', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'mainController', 'header', 'body', 'bodyLeft', 'bodyRight', 'pagecontrol']).config(['$stateProvider', function ($stateProvider) {
	$stateProvider.state('startExam', {
		url: '/startexam',
		templateUrl: '../../component/routertemplate/startexam.html',
		controller: ['$scope', 'data', 'deleteExam', function ($scope, data, deleteExam) {
			$scope.examlist = data;
			$scope.deleteExam = function (examName) {
				deleteExam(examName, $scope);
			};
		}],
		resolve: {
			data: ['$http', function ($http) {
				return $http({
					url: 'http://169.254.206.26:3000/examlist'
				}).then(function (result) {
					return result.data;
				}, function (error) {
					return error;
				});
			}],
			deleteExam: ['$http', function ($http) {
				return function (examName, scope) {
					$http({
						url: 'http://169.254.206.26:3000/deleteExam',
						method: 'POST',
						data: {
							examName: examName
						}
					}).then(function (result) {

						angular.forEach(scope.examlist, function (value, index, array) {
							if (examName == value.examName) {
								array.splice(index, 1);
							}
						});
					}, function (error) {
						throw new Error(error);
					});
				};
			}]
		}
	}).state('historyPaper', {
		url: '/historypaper',
		templateUrl: '../../component/routertemplate/historypaper.html',
		controller: ['$scope', 'historyData', '$http', function ($scope, historyData, $http) {
			$scope.data = historyData;
			$scope.edit = function (event, item) {
				item.flag = !item.flag;
				var target = event.target;
				if (target.innerText == '编辑') {
					target.innerText = '保存';
					var date = new Date(item.examTime);
					item.showTime = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
				} else {
					target.innerText = '编辑';
					$http({
						url: 'http://169.254.206.26:3000/editHistoryPaper',
						method: 'POST',
						data: $scope.data
					}).then(function (result) {
						if (result.data.state == 1) {
							console.log('编辑成功');
						}
					}, function (error) {
						console.log(error);
						console.log('编辑失败');
						window.location.reload();
					});
				}
			};
			$scope.changeTime = function (item) {
				item.examTime = new Date(item.showTime).getTime();
			};
		}],
		resolve: {
			historyData: ['$http', function ($http) {
				return $http({
					url: 'http://169.254.206.26:3000/historypaper'
				}).then(function (result) {
					return result.data;
				}, function (error) {
					throw new Error(error);
				});
			}]
		}
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

},{"./controller/mainController":3,"./directive/body":6,"./directive/body-left":4,"./directive/body-right":5,"./directive/header":7,"./directive/pagecontrol":8}],3:[function(require,module,exports){
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
        controller: ['$scope', '$state', function ($scope, $state) {
            $scope.oneAtATime = true;
            $scope.listData = [{
                title: '考试管理',
                value: [{
                    title: '开始考试',
                    routerName: 'startExam'
                }, {
                    title: '历史试卷',
                    routerName: 'historyPaper'
                }]
            }, {
                title: '工具下载',
                value: [{
                    title: '学习工具下载',
                    routerName: 'toolDownload'
                }]
            }, {
                title: '错题管理',
                value: [{
                    title: '上传错题图片',
                    routerName: 'uploadQusetion'
                }]
            }, {
                title: '图片管理',
                value: [{
                    title: '添加相册',
                    routerName: 'addAlbum'
                }, {
                    title: '相册列表',
                    routerName: 'photoList'
                }, {
                    title: '添加图片',
                    routerName: 'addPhoto'
                }]
            }];

            $scope.go = function (content) {
                $state.go(content.routerName);
            };
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

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = angular.module('pagecontrol', []).directive('pageControl', function () {
    return {
        restrict: 'ECMA',
        templateUrl: '../../../component/template/pagecontrol.html',
        controller: ['$scope', function ($scope) {}],
        scope: {
            data: '='
        }
    };
});

},{}],9:[function(require,module,exports){
'use strict';

require('./app');

var _rem = require('../base/rem');

var _rem2 = _interopRequireDefault(_rem);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _rem2.default)(13.66);
angular.bootstrap(document.documentElement, ['bootstrapApp']);

},{"../base/rem":1,"./app":2}]},{},[9]);
