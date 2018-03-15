var app = require('../app.js')
app.directive('ngTouchstart',[function(){
    return function($scope,$element,$attribute){
        $element.on('touchstart',function(event){
            // console.log('touchstart')
            $scope.$event= event;
            $scope.$apply($attribute['ngTouchstart'])
            
        })

    }
}])