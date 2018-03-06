
app.config(['$stateProvider', 'constant', function($stateProvider, constant) {
    $stateProvider.state('discover', {
        url: '/discover',
        templateUrl: './template/discover.html',
        controller: ['$scope', function($scope) {
            $scope.constant = constant
        }],
    }).state('music', {
        url: '/music',
        template: '<div>音乐</div>',
    }).state('friends', {
        url: '/friends',
        template: '<div>朋友</div>',
    }).state('discover.personalization', {
        url: '/personalization',
        templateUrl: './template/discover/personalization.html',
        controller: ['$scope', '$ionicSlideBoxDelegate',
            function($scope, $ionicSlideBoxDelegate) {
                $scope.constant = constant
                $scope.to = function(index) {
                    // console.log( index )
                    $ionicSlideBoxDelegate.slide(index, 300)
                }
            }],
    }).state('discover.songlist', {
        url: '/songlist',
        template: '<div>歌单</div>',
    }).state('discover.radiostation', {
        url: '/radiostation',
        template: '<div>电台</div>',
    }).state('discover.ranklist', {
        template: '<div>排行榜</div>',
    })
}])
