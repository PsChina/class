app.constant('base',{
    url:'http://localhost:3000'
})
.value('appValue',{
    pageNum:10
})
.service('pageControlManager',['$http','appValue',function($http,appValue){
    var _this = this;
    this.initArray = function(maxPage,scope){
        this.maxPage = maxPage;
        this.scope = scope;
        var array = [];

        if( maxPage > 6 ){
            array = new Array(4)
            if(scope){
                scope.pre = false;
                scope.next = true;
            }
        }else if(maxPage>2){
            array = new Array(maxPage-2);
            if(scope){
                scope.pre = false;
                scope.next = false;
            }
        }

        for(var i = 0 ,length = array.length ; i < length ; i++ ){
            array[i] = i+2;
        }
        this.scope.array = array;
    }
    this.didClickMaxPage = function(){
        var arr = new Array(_this.scope.array.length);
        for(var i = 0,length=arr.length ; i<length ; i++ ){
            arr[length-i-1] = this.maxPage - 1 -i;
        }
        _this.scope.array = arr;
    }
    this.resetArray = function(param,pre,next){
        console.log('重新设置数组')
        var arr = _this.scope.array;
        for(var i=0,length=arr.length ; i<length ; i++){
            arr[i] = arr[i] + param;
        }
        _this.scope.pre = pre;
        _this.scope.next = next;
    }
    this.clearStaticClass = function(){
        _this.scope.firstBtnClass = '';
        _this.scope.lastBtnClass = '';
    }
    this.clearActiveClass = function(){
        var arr = _this.scope.array;
        for( var i = 0 ,length = arr.length ; i < length ; i++ ) {
            _this.scope['active'+arr[i]] = '';
        } 
    }
    this.clearClass = function(){
        _this.clearStaticClass()
        _this.clearActiveClass()
    }
    this.getDataWithPageNumber = function(page){
        $http({
            url:'http://localhost:3000/singlepagedata',
            method:'POST',
            data:'number='+ appValue.pageNum +'&currentPage=' + page
        })
        .then(function(result){
            // console.log(result.data);
            _this.scope.data = result.data;
        },function(error){
            throw error;
        })
    }
    this.go=function(page){

        _this.currentPage = page;

        _this.getDataWithPageNumber(page);

        _this.clearClass()

        if( page === 1 ){ // 点击第一页
            _this.initArray(_this.maxPage,_this.scope);
            _this.scope.firstBtnClass = 'page-control-active';
        }else if(page === _this.maxPage){ // 点击最后一页
            _this.didClickMaxPage()
            _this.scope.lastBtnClass = 'page-control-active'
            _this.scope.next = false;
            if(_this.maxPage > 6){
                _this.scope.pre = true;
            }
        }else{ // 点击了动态生成的页面
            _this.scope['active'+page] = 'page-control-active'
            var arr = _this.scope.array
            var lastVal = arr[arr.length-1];
            var firstVal = arr[0];
            var maxPage = _this.maxPage;

            if( page === firstVal ){ //点击左边界
                if( firstVal!=2 ){
                    var pre = false;
                    if(maxPage>6&&firstVal!=3){
                        pre = true;
                    }
                    _this.resetArray(-1,pre,true)
                }
            }else if( page === lastVal ){ // 点击右边界
                if( lastVal!=maxPage-1 ){
                    var next = false;
                    if(maxPage>6&&lastVal!=maxPage-2){
                        next = true;
                    }
                    _this.resetArray(+1,true,next)
                }
            }

        }
    }
    this.goPre=function(){
        var index = this.currentPage-1;
        if(index>0){
            _this.go(index)
        }
    }
    this.goNext=function(){
        if(this.currentPage<_this.maxPage){
            _this.go(this.currentPage+1)
        }

        
    }
}])