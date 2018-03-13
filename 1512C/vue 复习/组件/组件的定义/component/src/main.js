// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

    // 定义组件有3 种方式 

    // 1 局部组件

    // 2 全局组件

    // 3 单文件组件

Vue.component('globalItem',{
    template:`<div>全局组件</div>`
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
