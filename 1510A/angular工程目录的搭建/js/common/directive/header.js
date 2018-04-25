function top(){
    return {
        restrict:'ECMA',
        templateUrl:'../../../component/template/top.html',
        controller:['$scope',function($scope){
            $scope.title="我是头部"
        }]
    }
}
angular.module('header',[])
        .directive('top',top)