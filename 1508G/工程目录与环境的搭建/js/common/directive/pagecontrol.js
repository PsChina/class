export default angular.module ( 'pagecontrol' , [ ] )
                      .directive ( 'pageControl' ,function ( ) {
                          return {
                            restrict:'ECMA',
                            replace:true,
                            templateUrl:'../../../component/template/pagecontrol.html',
                            controller:['$scope','pagecontrolService',($scope,pagecontrolService)=>{
                                
                                pagecontrolService.init($scope);
                                
                            }],
                            scope:{
                                data:'='
                            }
                          }
                      })
                      .service('pagecontrolService',['$http',function($http){
                          const _this = this;
                          this.maxPage = 10;
                          this.scope = null;
                          this.init = (scope,maxpage)=>{
                              _this.scope = scope;
                              _this.setMaxPage(_this.maxPage||maxpage);
                              _this.initBtnArray();
                              _this.initUI();
                              _this.setScopeGo();
                              _this.setScopeGoPre();
                              _this.setScopeGoNext();
                          }
                          this.initBtnArray = ()=>{
                                let array = [];
                                if(_this.maxPage > 6){
                                    array = new Array(4)
                                }else{
                                    array = new Array(_this.maxPage-2);
                                }
                                for(let i = 0,length = array.length; i<length ; i++){
                                    array[i] = i+2;
                                }
                                _this.scope.btnArray = array;
                          }
                        this.setMaxPage = (maxPage)=>{
                            _this.scope.maxPage = maxPage;
                        }
                        this.initUI = ()=>{
                            _this.scope.pre = false;
                            _this.scope.next = false;
                            if(_this.scope.maxPage>6){
                              _this.scope.next = true;
                            }
                        }
                        this.setScopeGo = ()=>{

                            _this.scope.go= (nextPage)=>{
                                 /**
                                  * 调用接口请求数据
                                  */
                                const temp = _this.scope.currentPage;

                                _this.scope.pageDatePromise = _this.getDateWithPageIndex(nextPage)

                                _this.scope.currentPage = nextPage;
                                _this.scope.$watch('pageDatePromise',function(newVal,oldVal){

                                    if(newVal == -1){
                                        _this.scope.currentPage = temp;
                                    } else {
                                        _this.scope.pageDate = newVal.$$state;
                                    }

                                })
                                


                                //清除 静态 高亮
                                _this.scope.firstBtnClass = _this.scope.lastBtnClass = '';
                                //设置 静态 高亮
                                if(nextPage == 1){
                                    _this.scope.firstBtnClass = 'pagecontrol-active';
                                    didClickFirstBtn();
                                } else if(nextPage == _this.scope.maxPage){
                                    _this.scope.lastBtnClass = 'pagecontrol-active';
                                    didClickLastBtn();
                                }

                                //清除 动态 高亮
                                let array  = _this.scope.btnArray;
                                for(let i = 0 , length = array.length ; i < length ; i++){
                                    _this.scope['active'+array[i]]  = '';
                                }
                                //设置 动态 高亮
                                _this.scope['active'+nextPage] = 'pagecontrol-active';

                                /**
                                 * 移动数组内的数字
                                 * 只有当你按了数组的边界的时候才改变 数组内容
                                 */

                                if(nextPage == array[0]&&nextPage!=2){ //点击了数组的上边界
                                    for( let i = 0 , length = array.length ; i < length ; i++ ) {
                                        array[i] = array[i] - 1;
                                    }
                                    _this.scope.next = true;
                                    if(nextPage == 3){
                                        _this.scope.pre = false;
                                    }
                                }

                                if(nextPage == array[array.length-1]&&nextPage!=_this.scope.maxPage-1){ //点击了数组的下边界
                                    
                                    for( let i = 0 , length = array.length ; i < length ; i++ ) {
                                        array[i] = array[i] + 1;
                                    }
                                    _this.scope.pre = true;
                                    if(nextPage==_this.scope.maxPage-2){
                                        _this.scope.next = false;
                                    }
                                }

                                /**
                                 * 当按第一个按钮和按最后一个按钮的时候 应该刷新UI
                                 */

                                 function didClickFirstBtn(){
                                    _this.initBtnArray()
                                    _this.initUI()
                                 }

                                 function didClickLastBtn(){
                                    let arr = _this.scope.btnArray;
                                    let length = arr.length;
                                    for(let i = length-1 ; i >= 0 ; i--){
                                        arr[i] = _this.scope.maxPage - (length -i)
                                    }
                                    if(_this.scope.maxPage>6){
                                    _this.scope.pre = true;
                                    }
                                    _this.scope.next = false;
                                 }
                                
                                 
                            }
                        }
                        this.setScopeGoPre = ()=>{
                            _this.scope.goPre = ()=>{
                                const nextPage = _this.scope.currentPage - 1 > 0 ? _this.scope.currentPage - 1 : 1;
                                _this.scope.go(nextPage);
                            }
                        }
                        this.setScopeGoNext = ()=>{
                            _this.scope.goNext = ()=>{
                                const nextPage = _this.scope.currentPage + 1 % (_this.scope.maxPage+1)
                                if(nextPage > 0){
                                    _this.scope.go(nextPage);
                                }
                            }
                        }
                        
                        this.getDateWithPageIndex = (pageIndex)=>{
                            
                            return $http({
                                url:'http://169.254.206.26:3000/singlePageData',
                                method:'POST',
                                data:{
                                    pageIndex,
                                    number:4
                                }
                            })
                            .then((result)=>{
                                console.log(result.data);
                                return result.data
                            },(error)=>{
                                throw new Error(error);
                                return -1;
                            })

                        }

                      }])