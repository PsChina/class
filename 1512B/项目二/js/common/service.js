app.constant('constant', {
    discover: {
        nav: [{
            routerName: 'discover.personalization',
            text: '个性推荐',
        }, {
            routerName: 'discover.songlist',
            text: '歌单',
        }, {
            routerName: 'discover.radiostation',
            text: '主播电台',
        }, {
            routerName: 'discover.ranklist',
            text: '排行榜',
        }],
        personalization: {
            imgs: ['./img/banner1.jpg', './img/banner2.jpg',
                './img/banner3.jpg', './img/banner4.jpg'],
        },
    },
}).service('playerManager', ['$timeout', '$interval',
    function($timeout, $interval) {
        var _this = this // 保存this 指向
        this.player = player // document.getElementById('player') 获取播放器
        this.currentSongIcon = './img/icon_01.png' // 默认icon
        this.songName = '小燕子' // 默认歌曲名
        this.singerName = '王力宏' // 默认歌手名
        this.onOffClass = 'icon-bofang' // 默认关闭状态
        this.musicList = [] // 歌曲列表
        this.currentSongIcon = 0 // 当前歌曲图标
        this.currentSong = '' // 当前歌曲
        this.progressbar = null // 进度条
        this.timer = null // 定时器
        this.mode = 0 // 单曲播放
        this.playMode = ['单曲播放', '单曲循环', '顺序播放', '列表循环', '随机播放'] // 枚举播放模式
        this.init = function(musicList,
            currentSongIndex,
            progressbar,
            player,
            scope) {
            console.log(scope)
            _this.scope = scope
            // 初始化播放器管理者
            _this.progressbar = progressbar // 初始化进度条
            _this.musicList = musicList // 初始歌曲列表
            _this.setSongWithIndex(currentSongIndex) // 设置歌曲信息
            if (player) { // 获取播放器
                this.player = player
                if ( scope ) {
                    scope.player = player
                }
            }
        }
        this.setSongWithIndex = function(index) { // 设置歌曲信息
            _this.currentSongIndex = index // 设置下一曲歌曲的索引
            _this.currentSong = _this.musicList[index].src // 设置下一曲曲的src
            _this.currentSongIcon =
            _this.musicList[index].songIcon // 设置下一曲的 icon
            _this.songName = _this.musicList[index].songName // 设置下一曲的 歌曲名
            _this.singerName = _this.musicList[index].singer // 设置下一曲的 歌手名
            _this.scope.$watch('player.duration', function(newVal, oldVal) {
                _this.duration = newVal // 设置总时长
            })
        }
        this.upDataCurrentTime = function(currentTime) {
            _this.currentTime = currentTime
        }
        this.upDataProgressBar = function() { // 更新进度条
            if (!_this.timer) { // 判断定时器是否存在
                _this.timer = $interval( function() { // 不存在就新建一个
                    var percent =
                    _this.player.currentTime / _this.player.duration
                    // 计算当前歌曲播放了多少
                    _this.progressbar.style.width =
                    percent * window.screen.width * 2 + 'px' // 根据歌曲进度设置 进度条宽度
                    _this.upDataCurrentTime(_this.player.currentTime)
                    // 更新当前播放时间
                    if ( percent === 1 ) { // 判断是否播放完毕
                        _this.playWithMode()
                    }
                }, 17 )
            }
        }
        this.resetPlayerUI = function() { // 还原到未播放的状态
            _this.progressbar.style.width = 0 // 还原进度条
            _this.showPlay() // 还原播放按钮的 iconfont
            _this.stopUpDataProgressBar() // 关闭定时器
            _this.currentTime = 0 // 还原播放时间
        }
        this.stopUpDataProgressBar = function() { // 关闭定时器
            $interval.cancel(_this.timer) // 关闭定时器
            _this.timer = undefined // 清空容器内的定时器id
        }
        this.showStop = function() { // 将播放按钮设置为 暂停
            _this.onOffClass = 'icon-stop'
        }
        this.showPlay = function() { // 将播放按钮设置为 播放
            _this.onOffClass = 'icon-bofang'
        }
        this.play = function() { // 播放
            _this.player.play() // 播放
            _this.upDataProgressBar() // 开启进度条更新
            _this.showStop() // 将播放按钮下次点击样式设为 暂停
        }
        this.pause = function() { // 暂停
            _this.player.pause() // 暂停
            _this.stopUpDataProgressBar() // 停止更新进度条
            _this.showPlay() // 将播放按钮下次点击样式设为 播放
        }
        this.onOff = function(event) {
            if ( _this.player.paused ) {
                // 播放变暂停
                // 让歌曲播放
                _this.play() // 播放
            } else {
                _this.pause() // 暂停
            }
        }
        this.nextSong = function() { // 下一曲
            var index = ++_this.currentSongIndex%_this.musicList.length
            // 获取下一曲的索引
            _this.setSongWithIndex(index) // 设置 下一曲信息
            $timeout(_this.play, 0) // 在下一个任务队列中 播放下一曲
        }
        this.changeCurrentTime = function(time) { // 改变歌曲的当前播放时间点
            _this.player.currentTime = time
        }
        this.changeMode = function() {
            _this.mode = (_this.mode+1) % _this.playMode.length
        }
        this.playWithMode = function(nextSong) {
            switch (_this.mode) {
            case 0:
                if (nextSong) {
                    _this.nextSong()
                } else {
                    _this.resetPlayerUI()
                }
                break
            case 1:
                if (nextSong) {
                    _this.nextSong()
                } else {
                    _this.play()
                }
                break
            case 2:
                if (nextSong) {
                    _this.nextSong()
                } else {
                    var ind = _this.currentSongIndex
                    var length = _this.musicList.length - 1
                    if ( ind !== length ) {
                        _this.nextSong()
                    } else {
                        _this.resetPlayerUI()
                    }
                }
                break
            case 3:
                _this.nextSong()
                break
            case 4:
                var index
                do {
                    index = Math.floor(Math.random()*_this.musicList.length)
                } while ( index === _this.currentSongIndex )
                _this.setSongWithIndex(index)
                $timeout(_this.play, 0)
                break
            default:
                _this.nextSong()
                break
            }
        }
        this.touchstart = function(event) { // 用户开始触摸进度条
            _this.starTarget = event.target // 获取点击元素
            _this.stopUpDataProgressBar()
            var width = event.touches[0].pageX
            _this.progressbar.style.width = width + 'px'
            _this.currentTime =
            _this.player.duration * width/(window.screen.width*2)
        }
        this.touchmove = function(event) { // 用户开始移动进度条
            var width = event.touches[0].pageX
            _this.endTarget =
                document
                    .elementFromPoint(event.touches[0].pageX,
                        event.touches[0].pageY)

            _this.progressbar.style.width = width + 'px'
            _this.currentTime =
            _this.player.duration * width/(window.screen.width*2)
        }
        this.touchend = function(event) { // 手指离开屏幕
            if ( _this.starTarget === _this.endTarget || !_this.endTarget ) {
                _this.changeCurrentTime(_this.currentTime)
                _this.play()
                _this.endTarget = false
            } else {
                // 弹回进度条
                var current = _this.player.currentTime // 获取播放了多少
                var duration = _this.player.duration // 获取总时长
                var percent = current / duration // 计算百分比
                var screenWidth = window.screen.width * 2 // 获取屏幕宽度
                var elWidth = percent * screenWidth // 根据屏幕宽度 和 歌曲播放百分比 计算进度条宽度
                _this.progressbar.style.width = elWidth + 'px' // 设置进度条宽度
                if (!_this.player.paused) {
                    _this.upDataProgressBar()
                }
                _this.currentTime = current
            }
        }
    }])

