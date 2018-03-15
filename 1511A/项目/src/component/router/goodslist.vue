<template>
    <div class="content">
        <div class="">
            <goods v-for="(item,index) in goodsList"
                :goodsName="item.name"
                :goodsPrice="item.price"
                :goodsIcon="item.img"
                :key="item.name"
                :index="index"
            >
            </goods>
        </div>
    </div>
</template>

<script>

import goods from './goodslist/goods.vue';

export default {
    data() {
        return {
            goodsList: [],
        };
    },
    components: {
        goods,
    },
    created() {
        this.axios({
            url: 'http://localhost:8080/mock/storedetaillist',
            method: 'POST',
            data: this.format({
                type: this.$route.params.foodtype,
            }),
        })
            .then((result) => {
                this.goodsList = result.data;
            }, (error) => {
                throw error;
            });
    },
    beforeRouteUpdate(to, from, next) {
        // 组件独享钩子（导航守卫）
        this.axios({
            url: 'http://localhost:8080/mock/storedetaillist',
            method: 'POST',
            data: this.format({
                type: this.$route.params.foodtype,
            }),
        }).then((result) => {
            this.goodsList = result.data;
            next();
        }, (error) => {
            throw error;
        });
    },
};
</script>

<style scoped>
.content {
  height: 100%;
  overflow-y: scroll;
}
</style>
