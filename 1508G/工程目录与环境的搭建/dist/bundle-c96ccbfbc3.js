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
        replace: true,
        templateUrl: '../../../component/template/pagecontrol.html',
        controller: ['$scope', 'pagecontrolService', function ($scope, pagecontrolService) {

            pagecontrolService.init($scope);
        }],
        scope: {
            data: '='
        }
    };
}).service('pagecontrolService', ['$http', function ($http) {
    var _this = this;
    this.maxPage = 10;
    this.scope = null;
    this.init = function (scope, maxpage) {
        _this.scope = scope;
        _this.setMaxPage(_this.maxPage || maxpage);
        _this.initBtnArray();
        _this.initUI();
        _this.setScopeGo();
        _this.setScopeGoPre();
        _this.setScopeGoNext();
    };
    this.initBtnArray = function () {
        var array = [];
        if (_this.maxPage > 6) {
            array = new Array(4);
        } else {
            array = new Array(_this.maxPage - 2);
        }
        for (var i = 0, length = array.length; i < length; i++) {
            array[i] = i + 2;
        }
        _this.scope.btnArray = array;
    };
    this.setMaxPage = function (maxPage) {
        _this.scope.maxPage = maxPage;
    };
    this.initUI = function () {
        _this.scope.pre = false;
        _this.scope.next = false;
        if (_this.scope.maxPage > 6) {
            _this.scope.next = true;
        }
    };
    this.setScopeGo = function () {

        _this.scope.go = function (nextPage) {
            /**
             * 调用接口请求数据
             */
            var temp = _this.scope.currentPage;

            _this.scope.pageDatePromise = _this.getDateWithPageIndex(nextPage);

            _this.scope.currentPage = nextPage;
            _this.scope.$watch('pageDatePromise', function (newVal, oldVal) {

                if (newVal == -1) {
                    _this.scope.currentPage = temp;
                } else {
                    _this.scope.pageDate = newVal.$$state;
                }
            });

            //清除 静态 高亮
            _this.scope.firstBtnClass = _this.scope.lastBtnClass = '';
            //设置 静态 高亮
            if (nextPage == 1) {
                _this.scope.firstBtnClass = 'pagecontrol-active';
                didClickFirstBtn();
            } else if (nextPage == _this.scope.maxPage) {
                _this.scope.lastBtnClass = 'pagecontrol-active';
                didClickLastBtn();
            }

            //清除 动态 高亮
            var array = _this.scope.btnArray;
            for (var i = 0, length = array.length; i < length; i++) {
                _this.scope['active' + array[i]] = '';
            }
            //设置 动态 高亮
            _this.scope['active' + nextPage] = 'pagecontrol-active';

            /**
             * 移动数组内的数字
             * 只有当你按了数组的边界的时候才改变 数组内容
             */

            if (nextPage == array[0] && nextPage != 2) {
                //点击了数组的上边界
                for (var _i = 0, _length = array.length; _i < _length; _i++) {
                    array[_i] = array[_i] - 1;
                }
                _this.scope.next = true;
                if (nextPage == 3) {
                    _this.scope.pre = false;
                }
            }

            if (nextPage == array[array.length - 1] && nextPage != _this.scope.maxPage - 1) {
                //点击了数组的下边界

                for (var _i2 = 0, _length2 = array.length; _i2 < _length2; _i2++) {
                    array[_i2] = array[_i2] + 1;
                }
                _this.scope.pre = true;
                if (nextPage == _this.scope.maxPage - 2) {
                    _this.scope.next = false;
                }
            }

            /**
             * 当按第一个按钮和按最后一个按钮的时候 应该刷新UI
             */

            function didClickFirstBtn() {
                _this.initBtnArray();
                _this.initUI();
            }

            function didClickLastBtn() {
                var arr = _this.scope.btnArray;
                var length = arr.length;
                for (var _i3 = length - 1; _i3 >= 0; _i3--) {
                    arr[_i3] = _this.scope.maxPage - (length - _i3);
                }
                if (_this.scope.maxPage > 6) {
                    _this.scope.pre = true;
                }
                _this.scope.next = false;
            }
        };
    };
    this.setScopeGoPre = function () {
        _this.scope.goPre = function () {
            var nextPage = _this.scope.currentPage - 1 > 0 ? _this.scope.currentPage - 1 : 1;
            _this.scope.go(nextPage);
        };
    };
    this.setScopeGoNext = function () {
        _this.scope.goNext = function () {
            var nextPage = _this.scope.currentPage + 1 % (_this.scope.maxPage + 1);
            if (nextPage > 0) {
                _this.scope.go(nextPage);
            }
        };
    };

    this.getDateWithPageIndex = function (pageIndex) {

        return $http({
            url: 'http://169.254.206.26:3000/singlePageData',
            method: 'POST',
            data: {
                pageIndex: pageIndex,
                number: 4
            }
        }).then(function (result) {
            console.log(result.data);
            return result.data;
        }, function (error) {
            throw new Error(error);
            return -1;
        });
    };
}]);

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
