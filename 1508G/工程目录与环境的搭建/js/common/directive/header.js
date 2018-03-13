export default angular.module('header', [])
    .directive('top', () => {
        return {
            restrict: 'ECMA',
            templateUrl: '../../../component/template/top.html',
            controller: ['$scope', function ($scope) {
                $scope.user = {
                    name: 'admin'
                }
            }]
        }
    })