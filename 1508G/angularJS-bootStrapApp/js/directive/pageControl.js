angular.module('pageControl',[])
       .directive('pageControl',[function(){
        return{
            restrict:'ECMA',
            replace:true,
            template:`
           <div>
           <style>
            .box{
                display:flex;
            }
            .item{
                flex:1;
                text-align:center;
                cursor:pointer;
            }
            .active1{
                background:#438eb9;
                color:white
            }
           </style>
           <div class="box">
           <div class="item" ng-click="goPre()">上一页</div>
           <div class="item" ng-class="firstBtnClass" ng-click="go(1)">1</div>
           <div class="item" ng-show="pre">...</div>
           <div class="item" ng-repeat="value in array" ng-class="{{'active1'+value}}" ng-click="go(value)">{{value}}</div>
           <div class="item" ng-show="next">...</div>
           <div class="item" ng-show="maxPage>1" ng-class="lastBtnClass" ng-click="go(maxPage)">{{maxPage}}</div>
           <div class="item" ng-click="goNext()">下一页</div>
           </div>
           </div>
            `,
            scope:{
                data:'=',
                maxPage:'=',
                currentPage:'='
            },
            controller:['$scope','pageCon','$http',function($scope,pageCon,$http){
                pageCon.scope = $scope;
                $scope.array = pageCon.initArray()
                $scope.maxPage
                $scope.$watch('maxPage',function(newVal,oldVal){
                    if(newVal!=oldVal){
                        $scope.array = pageCon.initArray()
                    }
                })
                console.log($scope)
                $scope.go=function(currentPage){
                    
                    if(currentPage!=$scope.currentPage){
                        $http({
                            url:'http://localhost:3000/getDataWithIndex',
                            method:'POST',
                            data:{
                                index:currentPage,
                                number:4,
                                id:sessionStorage.userId
                            }
                        }).then(function(result){
                            $scope.data = result.data;
                            $scope.currentPage = currentPage;
                        },function(error){
                            throw new Error(error)
                        })
                    }

                    pageCon.letBtnHighlight(currentPage);

                    if(currentPage == $scope.maxPage){
                       $scope.array =  pageCon.resetArray(currentPage);
                       pageCon.didClickNextBtn();
                    }else if(currentPage == 1){
                        $scope.array = pageCon.initArray()
                        pageCon.didClickPreBtn();

                    }else {
                        //判断左边界
                        if(currentPage == $scope.array[0]&&currentPage>2){ //满足条件 即是左边界
                            $scope.array =  pageCon.resetArray(true);
                            pageCon.openNext();
                            if(currentPage == 3){
                                pageCon.closePre()
                            }
                        }  else if(currentPage == $scope.array[$scope.array.length-1]&&currentPage<$scope.maxPage-1){
                            $scope.array = pageCon.resetArray(false);
                            pageCon.openPre();
                            if(currentPage == $scope.maxPage -2){
                                pageCon.closeNext()
                            }
                        }
                    }

                }
                $scope.goPre = function(){
                   var newPageIndex =  --$scope.currentPage > 0 ? $scope.currentPage : 1;
                   $scope.go(newPageIndex);
                }
                $scope.goNext = function(){
                    var newPageIndex = ++$scope.currentPage <= $scope.maxPage ? $scope.currentPage : $scope.maxPage;
                    $scope.go(newPageIndex)
                }
            }]


        }
       }])
       .service('pageCon',[function(){
            var _this = this;
            this.scope
            this.initArray = function(){
                if(_this.scope.maxPage>=6){
                    _this.array = new Array(4)
                    _this.didClickPreBtn()
                }else if(_this.scope.maxPage>2){
                    _this.array = new Array(_this.scope.maxPage-2)
                    _this.closeAllOmit();
                }else{
                    //小于等于2
                    _this.array = [];
                    _this.closeAllOmit();
                }
                for(var i=0,length=_this.array.length ;i<length;i++){
                    _this.array[i] = i+2;
                }
                _this.scope.firstBtnClass = 'active1';
                return _this.array;
            }
            this.resetArray = function(value){
               if(typeof value != 'boolean' ) {
                    if(value == _this.scope.maxPage){
                        
                       for(var i = _this.array.length-1; i>=0; i--){
                           _this.array[i] = _this.scope.maxPage - (_this.array.length-i)
                       }
                        
                    }
               } else {
                    for(var i = 0 ; i<_this.array.length; i++){
                        _this.array[i] = _this.array[i] +( value ? -1 : 1);
                    }
               }

               return _this.array;

            }
            this.openPre = function(){
                _this.scope.pre = true;
            }
            this.closePre = function(){
                _this.scope.pre = false;
            }
            this.openNext = function(){
                _this.scope.next = true;
            }
            this.closeNext = function(){
                _this.scope.next = false;
            }
            this.closeAllOmit =function(){
                _this.closePre()
                _this.closeNext()
            }
            this.didClickPreBtn = function(){
                _this.closePre();
                if(_this.scope.maxPage>6){
                    _this.openNext();
                }
            }
            this.didClickNextBtn = function(){
                if(_this.scope.maxPage>6){
                _this.openPre();
                }
                _this.closeNext();
            }
            this.clearAllBtnHighlight =function(){
                //静态
                _this.scope.firstBtnClass = '';
                _this.scope.lastBtnClass = '';
                //动态
                for(var i = 0,length = _this.array.length; i<length ; i++){
                    _this.scope['active1'+_this.array[i]] = ''; 
                }
            }
            this.letBtnHighlight = function(currentPage){
                _this.clearAllBtnHighlight();
                if(currentPage == 1){
                    _this.scope.firstBtnClass = 'active1'
                }else if(currentPage == _this.scope.maxPage){
                    _this.scope.lastBtnClass = 'active1'
                }else {
                    _this.scope['active1'+currentPage] = 'active1'; 
                }
            }
       }])