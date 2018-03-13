
angular.module('top',[])
.directive('top',[function(){
    return {
        restrict:'ECMA',
        templateUrl:'../../component/template/top.html',
        controller:[function(){
            console.log('指令已经创建')
        }],
        link:function($scope,$element,$attribute){
            console.log($element)
        }
    }
}])