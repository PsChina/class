import Vue from 'vue'
import Router from 'vue-router'
// 引入 一级路由页面
import home from '@/components/routes/home'
import about from '@/components/routes/about'
import me from '@/components/routes/me'
// 引入 二级路由页面
import room1 from '@/components/routes/home/room1'
import room2 from '@/components/routes/home/room2'
import room3 from '@/components/routes/home/room3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },{
      path: '/home',
      component: home,
      children:[ //孩子
            {
                path:'', //默认路由
                component:room1
            },
            { 
                path:'room1',
                component:room1
            },{ 
                path:'room2',
                component:room2
            },{ 
                path:'room3',
                component:room3
            }
        ]
    },{
       path: '/about',
       component: about
    },{
       path: '/me',
       component: me
    }
  ]
})
