<template>
  <div id="app">
      <span 
      v-for="route in routes" 
      @touchend="go(route)" 
      v-text="route.routeName"
      :class="{active:currentRoute===route.path}"
      >

      </span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
          currentRoute:'/path1',
          routes:[
              {path:'/path1',routeName:'路由1'},
              {path:'/path2',routeName:'路由2'},
              {path:'/path3',routeName:'路由3'},
          ]
      }
  },
  methods:{
      go(route){ //自定义的go 方法
          this.$router.push({path:route.path}); // 用js跳转路由
          this.currentRoute = route.path; // 更新类名
      }
  }
}
</script>

<style>
    .active{
        background: red;
    }
</style>
