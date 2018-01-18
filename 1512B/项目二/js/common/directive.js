app.directive('ngTouchstart', [function() {
    return function($scope, $element, $attribute) {
        $element.on('touchstart', function(event) {
            $scope.$event = event
            $scope.$apply($attribute['ngTouchstart'])
        })
    }
}]).directive('ngTouchmove', [function() {
    return function($scope, $element, $attribute) {
        $element.on('touchmove', function(event) {
            $scope.$event = event
            $scope.$apply($attribute['ngTouchmove'])
        })
    }
}]).directive('ngTouchend', [function() {
    return function($scope, $element, $attribute) {
        $element.on('touchend', function(event) {
            $scope.$event = event
            $scope.$apply($attribute['ngTouchend'])
        })
    }
}]).directive('letDom', [function() {
    return function($scope, $element, $attribute) {
        $scope[$attribute['letDom']] = $element[0]
    }
}])
