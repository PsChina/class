app.config(['$stateProvider','$urlRouterProvider','appConst',function($stateProvider,$urlRouterProvider,appConst){ // 配置路由
    $urlRouterProvider.otherwise('/discover') // 一级默认路由
    $urlRouterProvider.when('/discover','/discover/gexin') // 二级默认路由

    $stateProvider.state('discover',{
        url:'/discover',
        templateUrl:'./src/template/route/discover.html',
        controller:['$scope','$state',function($scope,$state){
            $scope.navArr = appConst.discover.nav;
            $state.go('discover.gexin') // 默认打开二级路由。
        }]
    }).state('music',{
        url:'/music',
        templateUrl:'./src/template/route/music.html'
    }).state('friends',{
        url:'/friends',
        templateUrl:'./src/template/route/friends.html'
    })
    // 配置二级路由
    .state('discover.gexin',{
        url:'/gexin',
        templateUrl:'./src/template/route/discover/gexin.html',
        controller:['$scope','$ionicSlideBoxDelegate',function($scope,$ionicSlideBoxDelegate){
            $scope.to = function(index){
                $ionicSlideBoxDelegate.slide(index,1000);
            }
        }]
    }).state('discover.gedan',{
        url:'/gedan',
        templateUrl:'./src/template/route/discover/gedan.html'
    }).state('discover.diantai',{
        url:'/diantai',
        templateUrl:'./src/template/route/discover/diantai.html'
    }).state('discover.paihang',{
        url:'/paihang',
        templateUrl:'./src/template/route/discover/paihang.html'
    })
}])