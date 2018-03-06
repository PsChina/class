app.controller('main',['$scope','$ionicSlideBoxDelegate',function($scope, $ionicSlideBoxDelegate){
    $scope.msg = 'Hello ionic!'
    $scope.imgArr = [ 
        './src/img/banner1.jpg',
        './src/img/banner2.jpg',
        './src/img/banner3.jpg',
        './src/img/banner4.jpg',
    ]
    $scope.click = function(index){
        $ionicSlideBoxDelegate.slide(index,1000);
    }
}])