// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style.scss' // 名字写错了
import axios from 'axios'


Vue.prototype.axios = axios;
// 全局守卫 有2个 一个是beforeEach 一个是afterEach

// 全局的路由钩子必须在 router 上写   也就是 const router = new VueRouter({ routes })

// 全局守卫的意思是 按每个路由都会触发

// 接下来我们讲 路由独享钩子

router.beforeEach( (to , from , next)=>{ // 在每个路由跳转之前

    // to  下个路由
    // from 上个路由
    // next 是否跳转 调用则跳转
    console.log( '在每个路由跳转之前' ); 
    
    // 当我们调用next 的时候路由才会跳转

    // 假设你在这里要做网络请求 
    // 你可以先网络请求 
    /*
        Vue.axios({
            url:'XXX'
        })
        .then( (result)=>{
            //网络请求成功 之后
            // 再 跳转路由
            next()
        } )
    */
    next(); //这样就可以使得 路由正常跳转
   // next 不调用 就不刷新路由
} )

router.afterEach( (to , from)=>{ // 在每个路由跳转之后

    // to  下个路由
    // from 上个路由

    // 它没有 next 因为路由已经跳转完毕了
    console.log( '在每个路由跳转之后' ); 
    //这样就可以使得 路由正常跳转
} )




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
