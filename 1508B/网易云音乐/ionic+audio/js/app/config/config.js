var app = require('../app.js');
app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/discovermusic').when('/discovermusic','/discovermusic/gexing')
    $stateProvider.state('discoverMusic', {
        url: '/discovermusic',
        templateUrl: './template/discovermusic.html',
        controller:['$state',function($state){
            $state.go('discoverMusic.gexing')
        }]
    })
        .state('localMusic', {
            url: '/localmusic',
            templateUrl: './template/localmusic.html',
            controller:['playerManager','$scope',function(playerManager,$scope){
                $scope.playerManager = playerManager;
                
            }]
        })
        .state('friends', {
            url: '/friends',
            templateUrl: './template/friends.html',
            controller:['$scope','playerManager',function($scope,playerManager){
                $scope.playerManager = playerManager;
            }]
        })
        .state('discoverMusic.gedan', {
            url:'/gedan',
            templateUrl:'./template/discover/gedan.html'
        })
        .state('discoverMusic.gexing', {
            url:'/gexing',
            templateUrl:'./template/discover/gexing.html',
            controller:['$scope','$ionicSlideBoxDelegate',function($scope,$ionicSlideBoxDelegate){
                $scope.array = ['./img/banner1.jpg','./img/banner2.jpg','./img/banner3.jpg','./img/banner4.jpg']
                $scope.go=function(index){
                    $ionicSlideBoxDelegate.slide(index, [1000])
                }
            }]
        })
        .state('discoverMusic.paihang', {
            url:'/paihang',
            templateUrl:'./template/discover/paihang.html'
        })
        .state('discoverMusic.diantai', {
            url:'/diantai',
            templateUrl:'./template/discover/diantai.html'
        })
}])