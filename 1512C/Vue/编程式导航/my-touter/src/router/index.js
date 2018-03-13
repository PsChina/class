import Vue from 'vue'
import Router from 'vue-router'

import 组件1 from '@/components/routes/component1';
import 组件2 from '@/components/routes/component2';
import 组件3 from '@/components/routes/component3';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: {
          template:'<div>哈哈哈</div>'
      }
    },
    { path:'/path1', component:组件1 },
    { path:'/path2', component:组件2 },
    { path:'/path3', component:组件3 },
  ]
})
