app.directive('appHeader',[function(){
    return {
        restrict:'ECMA',
        templateUrl:'./src/template/app-header.html'
    }
}])
.directive('appPlayer',[function(){
    return {
        restrict:'ECMA',
        templateUrl:'./src/template/app-player.html',
        controller:['$scope','playerManager',function($scope,playerManager){
            $scope.playerManager = playerManager;
        }]
    }
}])
.directive('changeMode',function(){
    return {
        restrict:'ECMA',
        templateUrl:'./src/template/app-changemode.html',
        scope:{
            modes:'=',
            index:'='
        },
        controller:['$scope',function($scope){
            $scope.changeMode = function(){
                $scope.index = ++$scope.index%$scope.modes.length // 防止数组越界
            }
        }]
    }
})
.directive('volumeControl',[function(){ //音量控制按钮
    return {
        restrict:'ECMA',
        templateUrl:'./src/template/app-volumecontrol.html',
        controller:['$scope','getStyle',function($scope,getStyle){
            $scope.getStyle = getStyle;
            $scope.changeVolumeValue = function(event){
                var width = event.touches[0].pageX-event.target.offsetLeft; // 设置从左到右的宽度

                var maxWidth = parseInt($scope.maxVolumePx);

                if( width<=maxWidth&&width>=0 ){
                    $scope.volumeValue.style.width = width + 'px';
                }else if( width>maxWidth ) {
                    $scope.volumeValue.style.width = $scope.maxVolumePx;
                }else{
                    $scope.volumeValue.style.width = 0;
                }
            
                var volume = width/maxWidth;

               
                if(volume<=1&&volume>=0){ // 防止出现意外音量
                    $scope.playerVolume = volume;
                }else if( volume>1 ) {
                    $scope.playerVolume = 1;
                }else {
                    $scope.playerVolume = 0;
                }
               
                // console.log($scope.playerVolume);
                
            }
        }],
        scope:{
            playerVolume:'=' // 播放器音量
        },
        link:function($scope,$element,$attribute){
            var withValue =  100*$scope.playerVolume + '%';
            $scope.volumeValue.style.width = withValue;
            $scope.maxVolumePx = $scope.getStyle( $scope.volumeValueBox , 'width' ); // flex布局宽度不确定 自动获取最大宽度
                                                    // 拿到 父盒子的宽度
        }
    }
}])
.directive('songItem',function(){
    return {
        restrict:'ECMA',
        templateUrl:'./src/template/app-songitem.html',
        controller:['$scope','$rootScope',function($scope,$rootScope){
            
            if($scope.song){
                $scope.song = JSON.parse($scope.song);
                if($scope.songIcon === undefined){
                    $scope.songIcon = $scope.song.songIcon;
                }
                if( $scope.songName === undefined ){
                    $scope.songName = $scope.song.songName;
                }
                if( $scope.singer === undefined ){
                    $scope.singer = $scope.song.singer;
                }                
            }

            $scope.show = function(){

                if($rootScope.playerManager.currentSongIndex === $scope.index) {
                    return true
                }else{
                    return false;
                }

            }
        }], 
        scope:{
            index:'=',
            song:'@',
            songIcon:'@',
            songName:'@',
            singer:'@',
            play:'&'
        }
    }
})
.directive('letDom',['$rootScope',function($rootScope){
    return function($scope,$element,$attribute){
        $scope[ $attribute['letDom'] ] = $element[0] ;
        $rootScope [  $attribute['letDom'] ] = $element[0] ;
    }
}])
.directive('ngTouchstart',function(){  // 移动端事件
    return function($scope,$element,$attribute){
        $element.on('touchstart',function(event){
            $scope.$event = event;
            $scope.$apply( $attribute['ngTouchstart'] )
        })
    }
})
.directive('ngTouchmove',function(){  // 移动端事件
    return function($scope,$element,$attribute){
        $element.on('touchmove',function(event){
            $scope.$event = event;
            $scope.$apply( $attribute['ngTouchmove'] )
        })
    }
})
.directive('ngTouchend',function(){  // 移动端事件
    return function($scope,$element,$attribute){
        $element.on('touchend',function(event){
            $scope.$event = event;
            $scope.$apply( $attribute['ngTouchend'] )
        })
    }
})