export default angular.module('body', [])
    .directive('content', () => {
        return {
            restrict: 'ECMA',
            templateUrl: '../../../component/template/body.html',
            controller: [() => {

            }]
        }
    })