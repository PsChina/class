var app = require('../app.js')
app.directive('ngTouchmove',[function(){
    return function($scope,$element,$attribute){
        $element.on('touchmove',function(event){
            // console.log('touchstart')
            $scope.$event= event;
           $scope.$apply($attribute['ngTouchmove'])
        })

    }
}])