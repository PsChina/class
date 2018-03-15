var app = require('../app.js')
app.service('playerManager', ['$interval', '$rootScope', function ($interval, $rootScope) {
    var _this = this;
    this.scope;
    this.bar;
    this.player;
    this.didInit;
    this.timer;
    this.songList = [];
    this.currentSongIndex;
    this.modeArray = ['顺序播放', '单曲播放', '单曲循环', '随机播放', '列表循环']
    this.setSongMsg = function (index) {
        var index = index ? index : _this.currentSongIndex;
        _this.player.src = _this.songList[index].url;
        _this.scope.imgIcon = _this.songList[index].icon;
        _this.scope.songName = _this.songList[index].name;
        _this.scope.singer = _this.songList[index].singer;
    }
    this.init = function (player, scope, bar, songList, index) {
        _this.scope = scope;
        _this.bar = bar;
        _this.player = player;
        _this.songList = songList;
        _this.currentSongIndex = index;
        $rootScope.currentMode = '顺序播放';
        _this.didInit = true;
        if (_this.songList.length) {
            _this.setSongMsg();
        }
        return this;
    }
    this.updataProgressBar = function (scope, bar, player) {
        //考虑2中情况
        //1传参
        if (scope && bar && player) {

            _this.init(player, scope, bar)

        }

        //2无参

        //当前歌曲播放时间/总时间*屏幕宽度
        if (_this.didInit) {
            if (!_this.timer) {

                _this.timer = $interval(function () {
                    var rate = _this.player.currentTime / _this.player.duration,
                        didFinish = rate == 1 ? true : false;
                    _this.setProgressBarWidth(rate * window.screen.width * 2)
                    if (didFinish) {
                        _this.stopUpdataProgressBar();
                        _this.scope.playBtnClass = 'icon-bofang';
                        _this.setProgressBarWidth(0);
                        //根据播放模式 处理 接下来应该做的事
                        switch ($rootScope.currentMode) {
                            case '顺序播放':
                                if (_this.currentSongIndex != _this.songList.length - 1) {
                                    _this.nextSong();
                                }
                                break;
                            case '单曲循环':
                                _this.playSong();
                                break;
                            case '随机播放':

                                do {
                                    var index = Math.floor(Math.random() * 4);
                                } while (index == _this.currentSongIndex)

                                _this.playSongWithIndex(index)

                                break;
                            case '列表循环':
                                _this.nextSong();
                                break;
                            default:

                                break;
                        }
                    }
                }, 17)
            }
        } else {
            throw new Error('playerManager must init.');
        }

        return this;
    }
    this.stopUpdataProgressBar = function (event) {
        $interval.cancel(_this.timer);
        _this.timer = null;
        return this
    }
    this.fingerTouch = function(event){
        _this.stopUpdataProgressBar(event);
        _this.setProgressBarWidth(event.touches[0].pageX)
        _this.touchStartElement = event.target;
        return this
    }
    this.fingerMove = function(event){
        _this.endElement  =  document.elementFromPoint(event.touches[0].pageX,event.touches[0].pageY)
        _this.setProgressBarWidth(event.touches[0].pageX);
        return this
    }
    this.fingerLeve = function(){
        _this.rePlay();
        return this
    }
    this.setProgressBarWidth = function (width) {
        if (_this.scope) {
            if (_this.scope.bar) {
                _this.scope.bar.style.width = width + 'px';
                _this.rate = width / (window.screen.width * 2);
            }
        }
        return this
    }
    this.rePlay = function () {
        if (_this.player.played) {
            _this.player.pause();
        }
        _this.player.currentTime = _this.rate * _this.player.duration;
        _this.player.play();
        _this.updataProgressBar();
        _this.scope.playBtnClass = 'icon-stop';
        return this
    }
    this.playOrPause = function () {

        if (_this.scope.playBtnClass == 'icon-bofang') {
            _this.scope.playBtnClass = 'icon-stop';
            //播放
            _this.player.play();
            _this.updataProgressBar();
        } else {
            _this.scope.playBtnClass = 'icon-bofang';
            //暂停
            _this.player.pause();
            _this.stopUpdataProgressBar()
        }
        return this
    }
    this.changeAudioSrc = function (index) {
        if (_this.songList.length > 1) {
            _this.player.src = _this.songList[index].url;
            _this.currentSongIndex = index;
            _this.setSongMsg();
        } else {
            //提示用户歌曲列表不足2首歌曲
            //弹出一个 Toast 提示框
        }
        return this
    }
    this.playSongWithIndex = function (index) {
        _this.currentSongIndex = index;
        _this.setSongMsg();
        _this.playSong();
        return this
    }
    this.playSong = function () {
        _this.player.play()
        _this.scope.playBtnClass = 'icon-stop'
        _this.updataProgressBar();
        return this
    }
    this.nextSong = function () {
        // console.log('切换到下一曲');

        //实现 歌曲的切换

        //如何实现

        //把歌曲源换了
        //我第一次是如何让歌曲播放的 ---> 我兴建了个 audio 并且给了个 id  id.src="路径"   id.play();

        //你就想到 我把src 换成下一曲 不就好了

        //当前曲目的索引
        var index = ++_this.currentSongIndex % _this.songList.length;

        _this.changeAudioSrc(index);
        _this.stopUpdataProgressBar();
        _this.playSong();

        return this
    }
    this.changeMode = function () {
        var nextMode;
        angular.forEach(_this.modeArray, function (value, index, arr) {

            if ($rootScope.currentMode == value) {

                nextMode = arr[++index % arr.length];

            }
        })
        $rootScope.currentMode = nextMode;
        return this
    }
}])