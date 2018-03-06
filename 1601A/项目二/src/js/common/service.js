app.constant('appConst',{
    url:{
        baseUrl:'http://localhost:3000',
        songList:'http://localhost:3000/songList'
    },
    discover:{
        nav:[ 
            {
                routeName:'个性推荐',
                routeState:'discover.gexin' // routeUrl 暂时不写 等配置完二级路由之后就知道了
            },
            {
                routeName:'歌单',
                routeState:'discover.gedan'
            },
            {
                routeName:'主播电台',
                routeState:'discover.diantai'
            },
            {
                routeName:'排行榜',
                routeState:'discover.paihang'
            } 
        ],
        bannerArr:[] // 空数组
    },
})
.value('appValue',{ 
    appPlayerValue:{
        songList:[ // 这个数据 应该来自 网络请求
        ]
    }
})
.factory('getStyle',[function(){ // 兼容
    var getStyle;
    if( window.getComputedStyle ){
        getStyle = function(ele,attribute){
            return window.getComputedStyle(ele,null)[attribute];
        }
    }else{
        getStyle = function(ele,attribute){
            return ele.currentStyle[attribute];
        }
    }    
    return getStyle
}])
.service('playerManager',['$interval',function($interval){
    var _this = this; // 保存this 指向
    var screenWith = window.screen.width*2 // 只运行一次
    this.playModeList = ['单曲循环','列表播放','列表循环','随机播放','单曲播放'];
    this.currentMode = '单曲播放';
    this.modeIndex = 4;
    this.init = function(scope,ele,songList,currentSongIndex){ // 初始化播放器
       this.audio = document.createElement('audio') // 创建播放器 并且存储在 播放器管理者对象上
       this.audioEle = ele; // 存储dom 元素
       this.audio.style.display = 'none'// 这个播放器不需要ui  ui已经写好了 需要有它的功能就好了
       this.audioEle.appendChild(this.audio); // 把播放器 绑定到 dom树上去
       this.songList = songList; // 保存歌曲清单
       this.currentSongIndex = currentSongIndex; 
       this.setNextSong(currentSongIndex); //设置歌曲
       if(scope.progress){
           this.progress = scope.progress;
       }
    }
    this.setPlayMode = function(index){
        this.modeIndex = index;
        this.currentMode = this.playModeList[index];
    }
    this.setNextSong = function(songIndex){
        var songItem = this.songList[songIndex];
        this.audio.src= songItem.src;
        this.songName = songItem.songName;
        this.singer = songItem.singer;
        this.songIcon = songItem.songIcon;
        this.currentTime = 0; 
        this.currentSongIndex = songIndex; // 更新当前歌曲索引
    }
    this.updataProgressBar = function(){
        if( !this.timer ){
            this.timer = $interval( function(){
                
                var percent = _this.audio.currentTime / _this.audio.duration
                
                _this.progress.style.width = percent * screenWith +'px';
                _this.currentTime = _this.audio.currentTime; // 保存进度
                if(_this.audio.paused){
                    _this.stopUpdataProgressBar() // 停止更新进度条
                    _this.progress.style.width = 0; // 进度条宽度归零
                    _this.playNextSongWithMode(false) // 根据播放模式继续播放
                }
            } , 17 )            
        }
    }
    this.stopUpdataProgressBar = function(){
        $interval.cancel(this.timer);
        this.timer = undefined;
    }
    this.play = function(){
        this.audio.play(); // 播放
        // 更新进度条
        this.updataProgressBar();
    }
    this.playWithIndex = function(index){ //根据索引播放歌曲
        this.setNextSong(index);
        this.play()
    }
    this.pause = function(){
        this.audio.pause(); // 暂停
        // 停止更新进度条
        this.stopUpdataProgressBar();

    }
    this.playOrPause = function(){
        if( this.audio.paused ){
            this.play()
        }else{
            this.pause();
        }
    },
    this.setCurrentTime = function(event){ //设置前时间
       var percent = event.touches[0].pageX / screenWith;
       this.currentTime = this.audio.duration*percent;
    }
    this.fingerTouchStart = function(event){ // 刚开始点击的元素
        // 意味着你要开始修改进度条了
        this.stopUpdataProgressBar() // 停止更新进度条
        this.startElement = event.target // 存储开始的元素
        this.endElement = this.startElement // 让开始的元素等于结束的元素 当fingerTouchMove 不触发的时候 能直接改变进度条
        //console.log( this.startElement ); // 开始的元素
        this.ProgressBarBeforeChange = (this.audio.currentTime / this.audio.duration) * window.screen.width * 2 + 'px';
        this.setCurrentTime(event) 
    }
    this.fingerTouchMove = function(event){ // 移动过程中的元素
        this.progress.style.width = event.touches[0].pageX + 'px';
        this.setCurrentTime(event)  // 修改显示的时间
        this.endElement = document.elementFromPoint(event.touches[0].pageX,event.touches[0].pageY)
        //console.log( this.endElement ); // 结束的元素
    }
    this.fingerTouchEnd = function(){ // 在 手指离开的时候 待用了play方法
        // 不管你愿不愿意播放 我都播放 只要你的手指离开了屏幕
        // 那我能不能更具 用户点击的元素来 决定是否播放

        // 点击的是相同的元素 就播放
        // 点击是不同的元素就不改变状态

        // 判断 一开始 选中的元素 与 移动过后 手指所在的元素是否一致

        // 如果 一致 就触发事件
        // 如果 不一致 就什么都不做
        if( this.startElement === this.endElement ){
            console.log('同一个元素')
            this.audio.currentTime = this.currentTime;
            this.play();
        }else {
            console.log('不是同一个元素')
            // 还原ui
            this.progress.style.width = this.ProgressBarBeforeChange;
        }

    }
    this.playNextSongWithMode = function( isNextBtn ){ // 根据播放模式来播放下一曲

        var  nextSongIndex;

        switch(this.modeIndex){
            case 0: //'单曲循环'
                if(isNextBtn){ // 如果按了下一曲
                    nextSongIndex = ++this.currentSongIndex%this.songList.length //下一曲
                }else{
                    nextSongIndex = this.currentSongIndex;   // 等与当前歌曲
                }
            break;
            case 1: // '列表播放'
                if(isNextBtn){
                    nextSongIndex = ++this.currentSongIndex%this.songList.length // 直接下一曲
                }else{
                    if( this.currentSongIndex<this.songList.length-1 ){
                        nextSongIndex = ++this.currentSongIndex;
                    }                    
                }
            break;

            case 2: // '列表循环'
                // 设置下一曲
                nextSongIndex = ++this.currentSongIndex%this.songList.length

            break;
            case 3: // '随机播放'
                do{
                    nextSongIndex = Math.floor(Math.random()*this.songList.length);
                } while( nextSongIndex==this.currentSongIndex ); // 下一首歌等于上一首歌的时候 重新生成随机数

            break;
            default: // '单曲播放'  // 测试 '列表循环'
                if(isNextBtn){
                    nextSongIndex = ++this.currentSongIndex%this.songList.length //下一曲
                }
            break;

        }

        if(nextSongIndex!=undefined){
            this.playWithIndex( nextSongIndex );
        }
    }
}])
