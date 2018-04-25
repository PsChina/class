angular.module('pagecontrol',[])
        .directive('pageControl',function(){
            return {
                restrict:'ECMA',
                replace:true,
                templateUrl:'../../../component/template/pagecontrol.html',
                controller:['$scope','pagecontrolManager',function($scope,pagecontrolManager){
                    
                    pagecontrolManager.getMaxPageWithCallback(function(maxPage){
                        pagecontrolManager.init($scope,maxPage,2);
                    });

                }]
            }
        })
        .service('pagecontrolManager',['$http',function($http){
            var _this = this;
            this.maxPage=0;
            this.scope=null;
            this.singlePageNumbr = 4;
            this.getMaxPageWithCallback = function(callback){
                $http({
                    url:'http://169.254.206.26:3000/getMaxPage?number='+_this.singlePageNumbr
                })
                .then(function(result){
                    callback(result.data);
                },function(error){
                    throw new Error(error);
                })
            }
            this.init = function(scope,maxPage,singlePageNumbr){
                _this.singlePageNumbr = singlePageNumbr;
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
                        if(_this.scope.maxPage>6){
                            _this.scope.next = true;
                        }

                    }
                    function didClickLast(){
                        var btnArray = _this.scope.btnArray;
                        var length = btnArray.length;
                        for(var i=length-1; i>=0; i--){
                            btnArray[i] = _this.scope.maxPage - (length-i);
                        }
                        if(_this.scope.maxPage>6){
                        _this.scope.pre=true;
                        }
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
                        number:_this.singlePageNumbr
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