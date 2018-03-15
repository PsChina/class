var app = require('../app.js');

app.directive('getDom',[function(){
    return function($scope,$element,$attributes){
        $scope[$attributes['getDom']] = $element[0];
    }
}])