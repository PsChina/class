app.run(['$rootScope','playerManager','appValue','getStyle','$http','appConst','playerManager',function($rootScope,playerManager,appValue,getStyle,$http,appConst,playerManager){
    $rootScope.playerManager=playerManager;// 全局挂载播放器管理者。
    $rootScope.appValue = appValue;
    $rootScope.appConst = appConst;
    $rootScope.getStyle = getStyle; // 全局挂载获取样式的方法 

    $http({
        url:appConst.url.songList,
        method:'GET'
    })
    .then(function(result){
        appValue.appPlayerValue.songList = result.data;
        playerManager.songList = result.data; // 网络请求成功  之后应该初始化播放器
       
        playerManager.init($rootScope,playerUI,result.data,0)  //初始化播放器

        console.log( result.data )
    },function(error){   
        throw new Error(error);
    })

    $http({
        url:appConst.url.baseUrl+'/banner',
        method:'GET'
    })
    .then(function(result){
        console.log(result.data)
        appConst.banner = result.data;
    },function(error){   
        throw new Error(error);
    })
}])