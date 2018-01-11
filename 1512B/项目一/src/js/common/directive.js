
app.directive('navigation',function(){
    return {
        restrict:'ECMA',
        replace:true,
        templateUrl:'./src/template/nav.html',
        controller:['$scope',function($scope){

        }],
        scope:{
            logo:'=',
            title:'=',
            data:'='
        },
        link:function($scope){
        }
    }
})
.directive('cont',function(){
    return {
        restrict:'ECMA',
        replace:true,
        templateUrl:'./src/template/content.html',
    }
})
.directive('left',function(){
    return {
        restrict:'ECMA',
        replace:true,
        templateUrl:'./src/template/left.html'
    }
})
.directive('right',function(){
    return {
        restrict:'ECMA',
        replace:true,
        templateUrl:'./src/template/right.html'
    }
})
.directive('letDom',function(){
    return {
        priority:1,
        link:function($scope,$element,$attribute){
            $scope[$attribute['letDom']] = $element[0];
        }
    }
})