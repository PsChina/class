var app  = require('../app.js');
app.controller('main',['$scope','playerManager',function($scope,playerManager){
    var songList = [{
        url:'./mp3/王力宏 - 你不知道的事.mp3',
        name:'你不知道的事',
        singer:'王力宏',
        icon:'./img/icon_01.png'
    },{
        url:'./mp3/周杰伦 - 爱我别走.m4a',
        name:'爱我别走',
        singer:'周杰伦',
        icon:'./img/icon_02.png'        
    },{
        url:'./mp3/周杰伦 - 告白气球.m4a',
        name:'告白气球',
        singer:'周杰伦',
        icon:'./img/icon_03.png'        
    },{
        url:'./mp3/周杰伦 - 听妈妈的话.m4a',
        name:'听妈妈的话',
        singer:'周杰伦',
        icon:'./img/icon_04.png'        
    }];
    $scope.playBtnClass='icon-bofang';  // icon-stop
    $scope.playerManager = playerManager;
    // $scope.$watch('songList',function(newval,oldval){
        
    // })
    playerManager.init(player,$scope,$scope.bar,songList,0);
}]) 