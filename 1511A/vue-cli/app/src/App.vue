<template>
  <div id="app">
    <router-view/>
    <hello/>
    <router-link to="/ceshi" tag="span">ceshi</router-link>
    <router-link to="/" tag="span">home</router-link>
  </div>
</template>

<script>
import hello from './components/hello.vue'
export default {
  name: 'app',
  components:{
    hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
