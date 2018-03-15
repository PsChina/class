(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app = angular.module('app',['ui.router','ionic'])
module.exports = app;


},{}],2:[function(require,module,exports){
var app = require('../app.js');
app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/discovermusic').when('/discovermusic','/discovermusic/gexing')
    $stateProvider.state('discoverMusic', {
        url: '/discovermusic',
        templateUrl: './template/discovermusic.html',
        controller:['$state',function($state){
            $state.go('discoverMusic.gexing')
        }]
    })
        .state('localMusic', {
            url: '/localmusic',
            templateUrl: './template/localmusic.html',
            controller:['playerManager','$scope',function(playerManager,$scope){
                $scope.playerManager = playerManager;
                
            }]
        })
        .state('friends', {
            url: '/friends',
            templateUrl: './template/friends.html',
            controller:['$scope','playerManager',function($scope,playerManager){
                $scope.playerManager = playerManager;
            }]
        })
        .state('discoverMusic.gedan', {
            url:'/gedan',
            templateUrl:'./template/discover/gedan.html'
        })
        .state('discoverMusic.gexing', {
            url:'/gexing',
            templateUrl:'./template/discover/gexing.html',
            controller:['$scope','$ionicSlideBoxDelegate',function($scope,$ionicSlideBoxDelegate){
                $scope.array = ['./img/banner1.jpg','./img/banner2.jpg','./img/banner3.jpg','./img/banner4.jpg']
                $scope.go=function(index){
                    $ionicSlideBoxDelegate.slide(index, [1000])
                }
            }]
        })
        .state('discoverMusic.paihang', {
            url:'/paihang',
            templateUrl:'./template/discover/paihang.html'
        })
        .state('discoverMusic.diantai', {
            url:'/diantai',
            templateUrl:'./template/discover/diantai.html'
        })
}])
},{"../app.js":1}],3:[function(require,module,exports){
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
},{"../app.js":1}],4:[function(require,module,exports){
var app = require('../app.js');

app.directive('getDom',[function(){
    return function($scope,$element,$attributes){
        $scope[$attributes['getDom']] = $element[0];
    }
}])
},{"../app.js":1}],5:[function(require,module,exports){
var app = require('../app.js')
app.directive('ngTouchend',[function(){
    return function($scope,$element,$attribute){
        $element.on('touchend',function(event){
            // console.log('touchstart')
            $scope.$event= event;
           $scope.$apply($attribute['ngTouchend'])
        })

    }
}])
},{"../app.js":1}],6:[function(require,module,exports){
var app = require('../app.js')
app.directive('ngTouchmove',[function(){
    return function($scope,$element,$attribute){
        $element.on('touchmove',function(event){
            // console.log('touchstart')
            $scope.$event= event;
           $scope.$apply($attribute['ngTouchmove'])
        })

    }
}])
},{"../app.js":1}],7:[function(require,module,exports){
var app = require('../app.js')
app.directive('ngTouchstart',[function(){
    return function($scope,$element,$attribute){
        $element.on('touchstart',function(event){
            // console.log('touchstart')
            $scope.$event= event;
            $scope.$apply($attribute['ngTouchstart'])
            
        })

    }
}])
},{"../app.js":1}],8:[function(require,module,exports){
require('./config/config.js')
require('./controller/mainController.js')
require('./directive/getDom.js')
require('./serivce/playerManager.js')
require('./directive/ngTouchstart.js')
require('./directive/ngTouchmove.js')
require('./directive/ngTouchend.js')
var rem = require('./rem.js')
rem(3.6);
},{"./config/config.js":2,"./controller/mainController.js":3,"./directive/getDom.js":4,"./directive/ngTouchend.js":5,"./directive/ngTouchmove.js":6,"./directive/ngTouchstart.js":7,"./rem.js":9,"./serivce/playerManager.js":10}],9:[function(require,module,exports){
function rem(value){
    document.documentElement.style.fontSize = window.screen.width/value +'px';
    window.onresize = function(){
        document.documentElement.style.fontSize = window.screen.width/value+'px';
    }
}

module.exports = rem;
},{}],10:[function(require,module,exports){
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
},{"../app.js":1}]},{},[8]);
