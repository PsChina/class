import Vue from 'vue';  // 这个需要别名 才能成功
import './css/style.css';
import '../index.html';
import axios from 'axios' // 网络请求
import VueRouter from 'vue-router'
import routes from './routes.js' //引入路由

Vue.prototype.axios = axios; // 挂载网络请求

Vue.use(VueRouter) // 使用路由插件

const router = new VueRouter({
    routes 
})

new Vue({
    el:'#app',
    data(){
        return {
            msg:'Hello Vue Route!',
            linkArr:[
                {
                    text:'热门推荐',
                    url:'/list/hot' // 路由路劲加参数
                },
                {
                    text:'星级排序',
                    url:'/list/starrank'// 路由路劲加参数
                },
                {
                    text:'字母排序',
                    url:'/list/letterrank'// 路由路劲加参数
                }
            ]
        }
    },
    router
    // 相当于router:router 
})

