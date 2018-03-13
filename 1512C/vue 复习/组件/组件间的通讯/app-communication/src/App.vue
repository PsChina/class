<template>
  <div id="app">
      <!-- 使用子组件 -->
    <home></home>
  </div>
</template>

<script>
import home from './components/home'

export default {
  name: 'App',
  components: { //注册子组件
    home
  }
}
</script>

<style>
</style>
