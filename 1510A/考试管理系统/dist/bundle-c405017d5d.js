(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function rem(value){
    document.documentElement.style.fontSize = window.screen.width / value + 'px';
    window.onresize = function(){
        document.documentElement.style.fontSize = window.screen.width / value + 'px';
    }
}
module.exports = rem;

},{}],2:[function(require,module,exports){
angular.module('bootstrapApp',['ui.bootstrap','ui.router','ngAnimate','mainController','header'])
        .config([function(){

        }])
        .run([function(){
            
        }])
},{}],3:[function(require,module,exports){
angular.module('mainController', [])
        .controller('main', ['$scope', function ($scope) {
                $scope.myInterval = 5000;
                $scope.noWrapSlides = false;
                $scope.active = 0;
                var slides = $scope.slides = [];
                var currIndex = 0;
              
                $scope.addSlide = function() {
                  var newWidth = 600 + slides.length + 1;
                  slides.push({
                    image: '//unsplash.it/' + newWidth + '/300',
                    text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
                    id: currIndex++
                  });
                };
              
                $scope.randomize = function() {
                  var indexes = generateIndexesArray();
                  assignNewIndexesToSlides(indexes);
                };
              
                for (var i = 0; i < 4; i++) {
                  $scope.addSlide();
                }
              
                // Randomize logic below
              
                function assignNewIndexesToSlides(indexes) {
                  for (var i = 0, l = slides.length; i < l; i++) {
                    slides[i].id = indexes.pop();
                  }
                }
              
                function generateIndexesArray() {
                  var indexes = [];
                  for (var i = 0; i < currIndex; ++i) {
                    indexes[i] = i;
                  }
                  return shuffle(indexes);
                }
              
                // http://stackoverflow.com/questions/962802#962890
                function shuffle(array) {
                  var tmp, current, top = array.length;
              
                  if (top) {
                    while (--top) {
                      current = Math.floor(Math.random() * (top + 1));
                      tmp = array[current];
                      array[current] = array[top];
                      array[top] = tmp;
                    }
                  }
              
                  return array;
                }
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
