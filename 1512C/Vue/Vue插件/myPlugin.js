const bus = { // Vue bus 插件 (组件通讯插件)
    install:function(Vue,options){
       
        const myBus = new Vue(); // 通讯插件

        if(Vue.prototype.bus === undefined){
            Vue.prototype.bus = myBus; // 挂载在原型上
        } 

        if(window.bus === undefined){
            window.bus = myBus; // 方案2 挂载在window上
        }

    }
}