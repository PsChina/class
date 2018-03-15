<template>
  <div>
      <div>
          <search :iconfont="iconfont" :text="text"></search>
          <div class="classify-body">
              <router-link :to="`/classify/${item.type}`" tag="div" v-for="item in list" :key="item.type" class="list-item">
                  <div v-text="item.type"></div> <img :src="item.image" alt="">
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>
import search from '../template/search/search.vue';
export default {
    data() {
        return {
            title: '分类',
            text: '搜索商家、商品名称',
            iconfont: 'icon-sousuo',
            list: [],
        };
    },
    components: {
        search,
    },
    created() {
        this.bus.$emit('updataTitle', this.title);
        this.bus.$emit('showTabBar');
        this.axios({
            url: 'http://localhost:8080/mock/getfoodtypelist',
            method: 'GET',
        }).then(
            (result) => {
                this.list = result.data;
            },
            (error) => {
                throw error;
            }
        );
    },
};
</script>

<style scoped lang="scss">
@import "../../css/style.scss";
.classify-body {
  display: flex;
  flex-wrap: wrap;
}
.list-item {
  width: 2.82rem;
  height: 1.06rem;
  background-color: $mainBgColor;
  line-height: 1.06rem;
  display: flex;
  justify-content: space-between;
  margin-left: 0.24rem;
  margin-top: 0.24rem;
}
.list-item div {
  text-indent: 0.24rem;
}
</style>

