<template>
    <div>
        <h2>home</h2>
        <router-link active-class="active" to="/home/room1" v-text="'room1'"></router-link>
        <router-link active-class="active" to="/home/room2" v-text="'room2'"></router-link>
        <router-link active-class="active" to="/home/room3" v-text="'room3'"></router-link>

        <span @touchend="go()">编程式导航</span>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods:{
        go(){
            this.$router.push({path:'/home/room2'}) //跳转
        }
    }
};
</script>

<style>
/* 二级路由高亮 方法一 active-class */
/* 方法二 exact-active-class */
    .active{
        background: red;
    }
</style>
