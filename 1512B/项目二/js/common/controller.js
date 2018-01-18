app.controller('main', ['$scope', '$ionicSlideBoxDelegate', 'playerManager',
    function($scope, $ionicSlideBoxDelegate, playerManager) {
        $scope.msg = 'Hello ionic!'
        $scope.array =
        ['./img/banner1.jpg', './img/banner2.jpg',
            './img/banner3.jpg', './img/banner4.jpg']
        $scope.go = function(index) {
            $ionicSlideBoxDelegate.slide( index, 1000 )
        }
        $scope.playerManager = playerManager
    }])
    .controller('player', ['$scope', 'playerManager', '$http',
        function($scope, playerManager, $http) {
            $scope.playerManager = playerManager
            $http({
                url: './songlist.json',
                method: 'GET',
            }).then(function(result) {
                playerManager.init(result.data,
                    3,
                    $scope.progressBar,
                    player,
                    $scope)
            }, function(error) {
                throw new Error(error)
            })
        }])

