(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function rem(value){
    document.documentElement.style.fontSize = window.screen.width / value + 'px';
    window.onresize = function(){
        document.documentElement.style.fontSize = window.screen.width / value + 'px';
    }
}
module.exports = rem;

},{}],2:[function(require,module,exports){
angular.module('bootstrapApp', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'mainController', 'header', 'body', 'bodyLeft', 'bodyRight', 'constValue','pagecontrol'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/startexam');
		$stateProvider.state('startExam', {
			url: '/startexam',
			templateUrl: '../../component/routertemplate/startexam.html',
			controller: ['$scope', 'data', '$http', 'url','$timeout', function ($scope, data, $http, url,$timeout) {
				$scope.examlist = data;

				$scope.delete = function (examname) {
					var tempArray = [];
					var arr = $scope.examlist;
					for(var i=0 ,length =arr.length ; i<length; i++){
						tempArray.push(arr[i])
					}

					angular.forEach($scope.examlist, function (value, index, array) {
						if (value.examName === examname) {
							array.splice(index, 1);
						}
					})

					// 发送 网络请求 修改后台数据
					$http({
						url: url.deleteExam,
						method: 'POST',
						data: {
							examname: examname
						}
					}).then(function (result) {
						if(result.state == 1){
							console.log('删除成功')
						}
					}, function (error) {
						throw new Error(error)
						$scope.examlist = tempArray;
					})
				}
			}],
			resolve: {
				data: ['$http','url', function ($http,url) {

					 	return $http({
							 url:url.examlist
						 }).then(function (result) {
							return result.data;
						}, function (error) {
							return error;
						})
				}]
			}
		}).state('historyPaper', {
			url: '/historypaper',
			templateUrl: '../../component/routertemplate/historypaper.html',
			controller: ['$scope','getHistoryPaper','$http', function ($scope,getHistoryPaper,$http) {
				$scope.data = getHistoryPaper ;

				$scope.edit = function(event,item){
					if(event.target.innerText == '编辑'){
						event.target.innerText = '保存'
						item.flag = true;
						var date = new Date(item.examTime)
						item.showTime = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
					}else {
						event.target.innerText = '编辑'
						item.flag = false;
						$http({
							method:'post',
							url:'http://169.254.206.26:3000/editHistoryPaper',
							data:$scope.data
						})
						.then(function(result){
							console.log(result.data);
						},function(error){
							throw new Error(error);
						})
					}
				}
				$scope.changeTime = function(item){
					var date = new Date(item.showTime);
					item.examTime = date.getTime();
				}
			}]
			,
			resolve:{
				getHistoryPaper:['$http','url',function($http,url){
					return $http({
						url:url.historypaper
					}).then(function(result){
						return result.data;
					},function(error){
						throw new Error(error)
					})

				}]
			}
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
angular.module('pagecontrol',[])
        .directive('pageControl',function(){
            return {
                restrict:'ECMA',
                replace:true,
                templateUrl:'../../../component/template/pagecontrol.html',
                controller:['$scope','pagecontrolManager',function($scope,pagecontrolManager){
                    
                    pagecontrolManager.getMaxPageWithCallback(function(maxPage){
                        pagecontrolManager.init($scope,maxPage);
                    });
                    
                }]
            }
        })
        .service('pagecontrolManager',['$http',function($http){
            var _this = this;
            this.maxPage=0;
            this.scope=null;
            this.getMaxPageWithCallback = function(callback){
                $http({
                    url:'http://169.254.206.26:3000/getMaxPage?number=4'
                })
                .then(function(result){
                    callback(result.data);
                },function(error){
                    throw new Error(error);
                })
            }
            this.init = function(scope,maxPage){
                _this.scope = scope;
                _this.setMaxPage(maxPage||10);
                _this.initBtnArray();
                _this.initUI();
                _this.setScopeGo();
                _this.setScopeGoPre();
                _this.setScopeGoNext();
            }
            this.setMaxPage = function(pageNumber){
                if(pageNumber>0){
                    _this.maxPage = pageNumber;
                    _this.scope.maxPage = pageNumber;
                }
            }
            this.initBtnArray = function(){

                var btnArray = [];

                if(_this.maxPage > 6){
                    btnArray = new Array(4);
                }else if(_this.maxPage>2){
                    btnArray = new Array(_this.maxPage-2);
                }

                for (var i = 0 , length = btnArray.length ; i < length ; i++ ) {
                    btnArray[i] = 2 + i;
                }

                _this.scope.btnArray = btnArray;
            }
            this.initUI = function(){
                _this.scope.pre = false;
                if(_this.maxPage>6){
                    _this.scope.next = true;
                }else {
                    _this.scope.next = false;
                }
            }
            this.setScopeGo = function(){
                _this.scope.go = function(nextPage){
                    /**
                     * 请求页面数据
                     */
                    _this.scope.promise = _this.getDataWithPageIndex(nextPage);

                    _this.scope.$watch('promise',function(newVal,oldVal){
                        if(newVal!=-1){
                            _this.scope.pageData = newVal.$$state;
                        }
                    })
                    
                    //清除静态按钮高亮
                    _this.scope.firstBtnClass = _this.scope.lastBtnClass = '';
                    //添加静态按钮的高亮
                    if(nextPage == 1){
                        _this.scope.firstBtnClass = 'active';
                        didClickFirst()
                    }else

                    if(nextPage==_this.scope.maxPage){
                        _this.scope.lastBtnClass = 'active';
                        didClickLast()
                    }
                    //-------------动态
                    // 清除
                    var btnArr = _this.scope.btnArray;
                    for(var i = 0 , length = btnArr.length ; i < length ; i++ ){
                        _this.scope['active'+btnArr[i]] = '';
                    }
                    // 添加
                    _this.scope['active'+nextPage] = 'active';

                    /**
                     *  现在开始 做按钮内容的动态替换
                     */
                    if(nextPage == btnArr[0]&&nextPage!=2){ //按了 第一个动态按钮了

                        for(var i = 0 , length = btnArr.length ; i < length ; i++){
                            btnArr[i] = btnArr[i]-1;
                        }
                        _this.scope.next = true;

                        if(nextPage == 3){
                            _this.scope.pre = false;
                        }

                    } else 
                    if(nextPage == btnArr[btnArr.length-1] && nextPage != _this.scope.maxPage-1){ //按了最后一个动态按钮了
                        
                        for(var i = 0 , length = btnArr.length ; i < length ; i++){
                            btnArr[i] = btnArr[i]+1;
                        }
                        _this.scope.pre = true;

                        if(nextPage == _this.scope.maxPage-2){
                            _this.scope.next = false;
                        }

                    } 
                    

                    /**
                     * 第一个按钮和最后一个按钮
                     */
                    function didClickFirst(){
                        _this.initBtnArray()
                        _this.scope.pre=false;
                        _this.scope.next = true;
                    }
                    function didClickLast(){
                        var btnArray = _this.scope.btnArray;
                        var length = btnArray.length;
                        for(var i=length-1; i>=0; i--){
                            btnArray[i] = _this.scope.maxPage - (length-i);
                        }
                        _this.scope.pre=true;
                        _this.scope.next = false;
                    }
                    _this.scope.currentPage = nextPage;
                    
                }
            }
            this.setScopeGoPre = function(){
                _this.scope.goPre = function(){
                    var nextPage = _this.scope.currentPage -1;
                    if(nextPage>=1){
                        _this.scope.go(nextPage);
                    }   
                }
            }
            this.setScopeGoNext = function(){
                _this.scope.goNext = function(){
                    var nextPage = _this.scope.currentPage +1;
                    nextPage = nextPage%(_this.scope.maxPage+1);
                    if(nextPage>0){
                        _this.scope.go(nextPage);
                    }
                    
                }
            }
            this.getDataWithPageIndex = function(index){
                /**
                 * 网络请求
                 */
                return $http({
                    url:'http://169.254.206.26:3000/getSinglePageData',
                    method:'POST',
                    data:{
                        index:index,
                        number:4
                    }
                })
                .then(function(result){
                    return result.data;
                },function(error){
                    throw new Error(error);
                    return -1;
                })
            }
        }])
},{}],9:[function(require,module,exports){
require('./controller/mainController');
require('./directive/header');
require('./directive/body');
require('./directive/body-left');
require('./directive/body-right');
require('./service/constant');
require('./directive/pagecontrol');
require('./app');
require('../base/rem')(13.66);
angular.bootstrap(document.documentElement,['bootstrapApp'])
},{"../base/rem":1,"./app":2,"./controller/mainController":3,"./directive/body":6,"./directive/body-left":4,"./directive/body-right":5,"./directive/header":7,"./directive/pagecontrol":8,"./service/constant":10}],10:[function(require,module,exports){
angular.module('constValue',[])
        .constant('url',{
            base:'http://169.254.206.26:3000',
            examlist:'http://169.254.206.26:3000/examlist',
            historypaper:'http://169.254.206.26:3000/historypaper',
            deleteExam:'http://169.254.206.26:3000/deleteExam'
        })
},{}]},{},[9]);
