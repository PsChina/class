<template>
  <div id="app">
    <div class="router-link-box" >
      <router-link active-class="active" class="router-link" to="/one" tag="span">路由1</router-link>
      <router-link active-class="active" class="router-link" to="/two" tag="span">路由2</router-link>
      <router-link active-class="active" class="router-link" to="/three" tag="span">路由3</router-link>
    </div>


    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    .router-link-box{
        display: flex;
    }
    .router-link{
        flex: 1;
        text-align: center;
    }
</style>
