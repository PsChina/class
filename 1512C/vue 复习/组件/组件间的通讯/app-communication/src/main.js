// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import bus from '@/plugins/bus'

Vue.use(bus);// 使用插件
// 这样有什么好处
// 好处就是 在任何一个封闭的作用域 都可以使用this.bus 或者 window.bus 
// 而不需要每次都 const bus= new Vue()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
