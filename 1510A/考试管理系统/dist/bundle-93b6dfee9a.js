(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function rem(value){
    document.documentElement.style.fontSize = window.screen.width / value + 'px';
    window.onresize = function(){
        document.documentElement.style.fontSize = window.screen.width / value + 'px';
    }
}
module.exports = rem;

},{}],2:[function(require,module,exports){
angular.module('bootstrapApp',['ui.router','ngAnimate','mainController','header'])
        .config([function(){

        }])
        .run([function(){
            
        }])
},{}],3:[function(require,module,exports){
angular.module('mainController',[])
        .controller('main',['$scope',function($scope){
            
        }])
},{}],4:[function(require,module,exports){
angular.module('header',[])
        .directive('top',function(){
            return {
                restrict:'ECMA',
                templateUrl:'../../../component/template/top.html',
                controller:['$scope',function($scope){
                    $scope.title = '头部';
                    $scope.items = [
                        'The first choice!',
                        'And another choice for you.',
                        'but wait! A third!'
                      ];
                    
                      $scope.status = {
                        isopen: false
                      };
                    
                      $scope.toggled = function(open) {
                        $log.log('Dropdown is now: ', open);
                      };
                    
                      $scope.toggleDropdown = function($event) {
                        $event.preventDefault();
                        $event.stopPropagation();
                        $scope.status.isopen = !$scope.status.isopen;
                      };
                    
                      $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
                }]
            }
        })
},{}],5:[function(require,module,exports){
require('./controller/mainController');
require('./directive/header');
require('./app');
require('../base/rem')(13.66);
angular.bootstrap(document.documentElement,['bootstrapApp'])
},{"../base/rem":1,"./app":2,"./controller/mainController":3,"./directive/header":4}]},{},[5]);
