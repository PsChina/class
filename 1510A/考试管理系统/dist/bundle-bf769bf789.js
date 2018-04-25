(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function rem(value){
    document.documentElement.style.fontSize = window.screen.width / value + 'px';
    window.onresize = function(){
        document.documentElement.style.fontSize = window.screen.width / value + 'px';
    }
}
module.exports = rem;

},{}],2:[function(require,module,exports){
angular.module('bootstrapApp',['ui.bootstrap','ui.router','ngAnimate','mainController','header','body','bodyLeft','bodyRight'])
        .config([function(){

        }])
        .run([function(){
            
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
                controller:['$scope',function($scope){
                    $scope.oneAtATime = true;
                    
                      $scope.groups = [
                        {
                          title: 'Dynamic Group Header - 1',
                          content: 'Dynamic Group Body - 1'
                        },
                        {
                          title: 'Dynamic Group Header - 2',
                          content: 'Dynamic Group Body - 2'
                        }
                      ]
                    
                      $scope.listdata = [
                          {
                              title:'考试管理',
                              value:['开始考试','历史试卷']
                          },{
                              title:'工具下载',
                              value:['学习工具下载']
                          },{
                              title:'错题管理',
                              value:['上传错题图片']
                          }
                      ]
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
require('./app');
require('../base/rem')(13.66);
angular.bootstrap(document.documentElement,['bootstrapApp'])
},{"../base/rem":1,"./app":2,"./controller/mainController":3,"./directive/body":6,"./directive/body-left":4,"./directive/body-right":5,"./directive/header":7}]},{},[8]);
