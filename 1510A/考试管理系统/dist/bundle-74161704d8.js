(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function rem(value){
    document.documentElement.style.fontSize = window.screen.width / value + 'px';
    window.onresize = function(){
        document.documentElement.style.fontSize = window.screen.width / value + 'px';
    }
}
module.exports = rem;

},{}],2:[function(require,module,exports){
angular.module('bootstrapApp', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'mainController', 'header', 'body', 'bodyLeft', 'bodyRight', 'constValue'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/startexam');
		$stateProvider.state('startExam', {
			url: '/startexam',
			templateUrl: '../../component/routertemplate/startexam.html',
			controller: ['$scope', 'getData', '$http', 'url', function ($scope, getData, $http, url) {
				$scope.examlist = getData({ url: url.examlist });
				$scope.delete = function (examname) {
					// 发送 网络请求 修改后台数据
					$http({
						url: url.deleteExam,
						method: 'POST',
						data: {
							examname: examname
						}
					}).then(function (result) {
						if (result.data.state == 1) {
							angular.forEach($scope.examlist, function (value, index, array) {
								if (value.examName === examname) {
									array.splice(index, 1);
								}
							})
						}
					}, function (error) {

						throw new Error(error)

					})
				}
			}],
			resolve: {
				getData: ['$http', function ($http) {

					return function (obj) {
						var promise = $http(obj).then(function (result) {
							return result.data;
						}, function (error) {
							return error;
						})

						return promise.$$state;
					}
				}]
			}
		}).state('historyPaper', {
			url: '/historypaper',
			templateUrl: '../../component/routertemplate/historypaper.html',
			controller: ['$scope', function ($scope) {

			}]
		}).state('toolDownload', {
			url: '/tooldownload',
			templateUrl: '../../component/routertemplate/tooldownload.html',
			controller: ['$scope', function ($scope) {

			}]
		}).state('errorQuestionManager', {
			url: '/errorquestionmanager',
			templateUrl: '../../component/routertemplate/errorquestionmanager.html',
			controller: ['$scope', function ($scope) {

			}]
		}).state('addPicture', {
			url: '/addpicture',
			templateUrl: '../../component/routertemplate/addpicture.html',
			controller: ['$scope', function ($scope) {

			}]
		}).state('photoList', {
			url: '/photolist',
			templateUrl: '../../component/routertemplate/photolist.html',
			controller: ['$scope', function ($scope) {

			}]
		}).state('addPhoto', {
			url: '/addphoto',
			templateUrl: '../../component/routertemplate/addphoto.html',
			controller: ['$scope', function ($scope) {
			}]
		})
	}])
	.run([function () {

	}])
},{}],3:[function(require,module,exports){
angular.module('mainController', [])
        .controller('main', ['$scope', function ($scope) {
                
        }])
},{}],4:[function(require,module,exports){
angular.module('bodyLeft',[])
        .directive('contentLeft',function(){
            return{
                restrict:"ECMA",
                templateUrl:'../../../component/template/bodyleft.html',
                controller:['$scope','$state',function($scope,$state){
                      $scope.index = 0;
                      $scope.oneAtATime = true;
                      $scope.listData = [
                          {
                              title:'考试管理',
                              value:[{
                                  title:'开始考试',
                                  routerName:'startExam'
                              },{
                                 title:'历史试卷',
                                 routerName:'historyPaper'
                              }]
                          },{
                              title:'工具下载',
                              value:[{
                                  title:'学习工具下载',
                                  routerName:'toolDownload'
                              }]
                          },{
                              title:'错题管理',
                              value:[{
                                  title:'上传错题图片',
                                  routerName:'errorQuestionManager'
                              }]
                          },{
                              title:'图片管理',
                              value:[{
                                  title:'添加图册',
                                  routerName:'addPicture'
                              },{
                                  title:'相册列表',
                                  routerName:'photoList'
                              },{
                                  title:'添加图片',
                                  routerName:'addPhoto'
                              }]
                          }
                      ]
                      $scope.go = function(option){
                          $state.go(option.routerName)
                          $scope.$parent.currentRoute = option.title;
                      }
                      $scope.changeInd = function(index){
                        $scope.index = index;
                      }
                }]
            }
        })
},{}],5:[function(require,module,exports){
angular.module('bodyRight',[])
.directive('contentRight',function(){
    return{
        restrict:"ECMA",
        templateUrl:'../../../component/template/bodyright.html',
        controller:[function(){
            
        }]
    }
})
},{}],6:[function(require,module,exports){
angular.module('body',[])
        .directive('content',function(){
            return {
                restrict:'ECMA',
                templateUrl:'../../../component/template/body.html',
                controller:[function(){
                    
                }]
            }
        })
},{}],7:[function(require,module,exports){
angular.module('header', [])
        .directive('top', function () {
                return {
                        restrict: 'ECMA',
                        templateUrl: '../../../component/template/top.html',
                        controller: ['$scope', function ($scope) {
                                $scope.user = {
                                        name:'admin'
                                }
                                $scope.items = [
                                        'The first choice!',
                                        'And another choice for you.',
                                        'but wait! A third!'
                                ];

                                $scope.status = {
                                        isopen: false
                                };

                                $scope.toggled = function (open) {
                                        $log.log('Dropdown is now: ', open);
                                };

                                $scope.toggleDropdown = function ($event) {
                                        $event.preventDefault();
                                        $event.stopPropagation();
                                        $scope.status.isopen = !$scope.status.isopen;
                                };

                                $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
                        }]
                }
        })
},{}],8:[function(require,module,exports){
require('./controller/mainController');
require('./directive/header');
require('./directive/body');
require('./directive/body-left');
require('./directive/body-right');
require('./service/constant');
require('./app');
require('../base/rem')(13.66);
angular.bootstrap(document.documentElement,['bootstrapApp'])
},{"../base/rem":1,"./app":2,"./controller/mainController":3,"./directive/body":6,"./directive/body-left":4,"./directive/body-right":5,"./directive/header":7,"./service/constant":9}],9:[function(require,module,exports){
angular.module('constValue',[])
        .constant('url',{
            base:'http://localhost:3000',
            examlist:'http://localhost:3000/examlist',
            historypaper:'http://localhost:3000/historypaper',
            deleteExam:'http://localhost:3000/deleteExam'
        })
},{}]},{},[8]);
