import Vue from 'vue';
import VueRouter from 'vue-router'; // 这是个插件 
import axios from 'axios';
import listDetial from './template/detail.vue'; // vue 单文件组件需要 下 vue-loader 和

Vue.prototype.axios = axios;

    // 前天 webpack 更新了  4.0 
    // 有一些变化 我们学的 是 webpack3.10.0  你需要知道的更多  大家回忆一下 gulp 是更加难用 更复杂 但实际上 他们都能解决同样的问题 
    // webpack4.0 更加简单 技术的发展 一定 将一个 比较难的东西 转向 一个比较简单的东西 符合人性
    // webpack4.0 会更加 傻瓜式 一键部署

    // -D 保存到开发环境   什么是开发环境 就是你的本机。
    // -S 保存到生产环境   什么是生产环境 就是项目最终运行的 服务器环境。
    
    
    // VueRouter 这个对象 将会在引入 vue-router.js之后存在。

     
    // 加上moke 数据

    // 在使用路由之前 需要将插件 注入vue中
    Vue.use(VueRouter);

    const routes = [ // 配置路由
        { path:'/list/:id', component: listDetial}
    ]

    // 新建路由

    const router = new VueRouter({
        routes 
    })

    const baseUrl = 'http://localhost:8080/mock';

    new Vue({
        el:'#app',
        data(){
            return { 
                msg:'Hello dynamic routing!',
                indexList:[]
            }
        },
        created(){ // 声明周期函数 当vue 实例被创建 就可可以发送网络请求了
            this.axios({
                url:baseUrl+'/indexlist',
                methods:'GET'
            }).then( (result)=>{
                console.log( result.data );
                this.indexList = result.data // 保存至 data 内 以便引用
            } , (error)=>{
                throw new Error(error);
            } )
        },
        router 
    })
