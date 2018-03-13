<template>
  <div>
      路由页面3
  </div>
</template>

<script>
// 组件内的守卫 有3个函数
export default {
    beforeRouteEnter(to,from,next){
        console.log('组件内的守卫 即将进入路由')
        next();
    },
    beforeRouteUpdate(to,from,next){
        //路由更新的时候会调用 也就是 动态路由 的参数发生改变的时候起作用。
        console.log('组件内的守卫 路由更新')
        next();
    },  
    beforeRouteLeave(to,from,next){
        console.log('组件内的守卫 离开路由之前')
        next();
    }
}
</script>

<style>

</style>

