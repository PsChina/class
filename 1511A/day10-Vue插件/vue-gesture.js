export default { //1
    install:function(Vue,options){ //2

        Vue.directive('slipup', {
            bind: function (el, binding, vnode) {
                const gestureManager = {}
                function start(event) {
                    gestureManager.startPoint = [event.touches[0].pageX, event.touches[0].pageY]
                }
                function move(event) {
                    gestureManager.endPoint = [event.touches[0].pageX, event.touches[0].pageY]
                }
                function end(event) {
        
                    const distanceY = gestureManager.startPoint[1] - gestureManager.endPoint[1];
                    if (distanceY > 30) {
                        binding.value()
                    }
        
                }
                el.addEventListener('touchstart', start)
                el.addEventListener('touchmove', move)
                el.addEventListener('touchend', end)
            }
        })
        Vue.directive('slipleft', {
            bind: function (el, binding, vnode) {
                const gestureManager = {}
                function start(event) {
                    gestureManager.startPoint = [event.touches[0].pageX, event.touches[0].pageY]
                }
                function move(event) {
                    gestureManager.endPoint = [event.touches[0].pageX, event.touches[0].pageY]
                }
                function end(event) {
                    const distanceX = gestureManager.startPoint[0] - gestureManager.endPoint[0];
                    if (distanceX > 30) {
                        binding.value()
                    }
        
                }
                el.addEventListener('touchstart', start)
                el.addEventListener('touchmove', move)
                el.addEventListener('touchend', end)
            }
        })
        Vue.directive('slipdown', {
            bind: function (el, binding, vnode) {
                const gestureManager = {}
                function start(event) {
                    gestureManager.startPoint = [event.touches[0].pageX, event.touches[0].pageY]
                }
                function move(event) {
                    gestureManager.endPoint = [event.touches[0].pageX, event.touches[0].pageY]
                }
                function end(event) {
                    const distanceY = gestureManager.startPoint[1] - gestureManager.endPoint[1];
                    if (distanceY < -30) {
                        binding.value()
                    }
        
        
                }
                el.addEventListener('touchstart', start)
                el.addEventListener('touchmove', move)
                el.addEventListener('touchend', end)
            }
        })
        Vue.directive('slipright', {
            bind: function (el, binding, vnode) {
                const gestureManager = {}
                function start(event) {
                    gestureManager.startPoint = [event.touches[0].pageX, event.touches[0].pageY]
                }
                function move(event) {
                    gestureManager.endPoint = [event.touches[0].pageX, event.touches[0].pageY]
                }
                function end(event) {
                    const distanceX = gestureManager.startPoint[0] - gestureManager.endPoint[0];
                    if (distanceX < -30) {
                        binding.value()
                    }
                }
                el.addEventListener('touchstart', start)
                el.addEventListener('touchmove', move)
                el.addEventListener('touchend', end)
            }
        })        
    }
}
