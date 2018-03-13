// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.prototype.axios = axios // 挂载网络请求工具


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({ // 根组件  
  el: '#app',
  components: { App },
  template: '<App/>'
})
