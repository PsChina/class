import Vue from './node_modules/vue/dist/vue.esm.js' //esm=>es6 module 符合 es6 规范的js模块

// 基本语法  用webpack + es6 ( vue 和 jq 一样 可以不需要 webpack  就像angular 可以不需要gulp )

// 在实训的时候 会学vuex  我们可以提前学 如果有时间的话

// Vue 是一个构造函数


// new 一个Vue实例的时候 需要传递一个对象

// 这个对象有 很多字段

// 1、 el 这个vue实例的 根元素  dom 元素
// 2、 data 数据 存放数据的 类似与ng 里面的 scope
// 3、 methods 函数 用于处理事件 和计算
// 4、 componenets // 子组件
// 5、 ...

// 生命周期函数 11个
// beforeCreated

// 局部子组件
const myComponnent = {
    template:`<div>我的第一个Vue组件</div>`, // 模版
    // data(){ // data 是个函数 
    //     return {

    //     }
    // },
    beforeDestroy(){ // 在销毁之前
        console.log('子组件销毁之前')
    },
    destroyed(){ // 已经销毁了
        console.log('子组件已经销毁了')
    },
    activated(){ // 激活
        console.log('组件由失效状态转为激活状态')
    },
    deactivated(){ // 失效
        console.log('组件由激活状态转为失效状态')
    }
}

const vm = new Vue({
    // el:'#app',  // 存在el  不存在el
    data:{ // 是一个对象
        msg:'Hello Vue !',
        show:0 // 默认不显示
    },
    methods:{
        myFn(){ // 对 对象的扩展 函数的简写
            console.log('点击了')
            this.msg = 'Vue 实例更新了！'
        }
    },
    components:{ // 对对象的扩展 属性的简写
        myComponnent
    },
    directives:{

    },
    beforeCreate(){ // 创建之前
        console.log( 'Vue 实例创建之前', this.msg )
        // 实例创建之前 也就是说 这个vue 的dom结构 data数据 methods 方法 等等 都没有准备好
    },
    created(){ // 已经创建了
        console.log( 'Vue 实例已经被创建', this.msg )
    },
    beforeMount(){ // 挂载之前
        console.log('Vue 的实例已经创建好了 但是没有挂在到 dom树上去')
        // debugger   //程序会在这里停止
    },
    mounted(){ // 已经挂载到 dom 树上
        console.log('Vue 实例已经被挂载在 dom 树上')
        // debugger  //程序会在这里停止 相当于一个断点 只有你手动点击继续 它才继续
    },
    beforeUpdate(){ // 更新之前  咱们Vue 的数据是 响应式的 是单向数据流的 每当数据发生改变一定会使得 对应的组件/视图发生改变 这个过程我们叫做更新（Update）
        console.log('组件即将更新但是还没有更新')
        // debugger
    },
    updated(){ // 已经更新了
        console.log('已经更新了')
    },
    beforeDestroy(){ // 在销毁之前
        console.log('销毁之前')
    },
    destroyed(){ // 已经销毁了
        console.log('已经销毁了')
    }
})

// keep-alive 

setTimeout(() => {
    vm.$mount('#app')  // 挂载 el 的时候才会触发 查看 是否含有 template 如果含有temlate 就会编译它
    // 如果不含有 就会 编译外部 的html 就是那个el
}, 4000);