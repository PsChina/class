var app = require('../app.js')
app.directive('ngTouchend',[function(){
    return function($scope,$element,$attribute){
        $element.on('touchend',function(event){
            // console.log('touchstart')
            $scope.$event= event;
           $scope.$apply($attribute['ngTouchend'])
        })

    }
}])