<template>
  <div id="app">
    <div class="box">
        <router-link
        class="link-item"
        v-for="route in routes"
        :to="route.path"
        v-text="route.name"
        :key="route.path"
        active-class="first-active"
        >

        </router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            routes: [
                {path: '/home', name: 'home'},
                {path: '/about', name: 'about'},
                {path: '/me', name: 'me'},
            ],
        };
    },
};
</script>

<style>
/* scoped的意思是 这里的css 只在当前组件和子组件生效 */

.box {
  width: 100%;
  display: flex;
}
.link-item {
  flex: 1;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
.first-active {
  background: rebeccapurple;
  color: white;
}
</style>
