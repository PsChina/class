import Vue from 'vue'
import Router from 'vue-router' // VueRouter 
import page1 from '@/components/routes/route-pageone'
import page2 from '@/components/routes/route-pagetwo'
import page3 from '@/components/routes/route-pagethree'
Vue.use(Router)

export default new Router({ //  new Router 
  routes: [
    {
      path: '/',
      component: {
          template:'<h1>haha this is my first component of vuejs.</h1>'
      }
    },
    {
        path:'/one',
        component:page1,
        //路由独享钩子 
        //现在 单独的 监听路由页面一 的一举一动
        beforeEnter(to,from,next){
            console.log('即将进入页面一 多了一句话')
            // 只有当你调用 next 的时候它才 进入
            next()
        }
    },
    {
        path:'/two',
        component:page2
    },
    {
        path:'/three',
        component:page3
    }
  ]
})
