<template>
<div style="overflow-y:scroll;">
    <img class="store-nav" :src="img" alt="">
    <div style="padding-top:.7rem;">
        <router-link v-for="item in storelist" :to="`/classify/${$route.params.type}/${item.name}`">
            <img :src="item.img" alt="">
        </router-link>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            img: require('../../img/nav.png'),
            storelist: [
                {img: require('../../img/store_01.png'), name: '田老师红烧肉'},
                {img: require('../../img/store_02.png'), name: '麦当劳'},
                {img: require('../../img/store_03.png'), name: '南城香'},
                {img: require('../../img/store_04.png'), name: '25块半'},
                {img: require('../../img/store_01.png'), name: '田老师红烧肉'},
            ],
        };
    },
    created() {
        this.bus.$emit('updataTitle', this.$route.params.type);
        this.bus.$emit('hideTabBar');
    },
};
</script>

<style scoped>
.store-nav {
  position: absolute;
  top: 0.8rem;
  left: 0;
}
</style>
