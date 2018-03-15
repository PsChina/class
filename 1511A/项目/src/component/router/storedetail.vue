<template>
    <div class="store-detial">
        <div class="store-content">
            <div class="store-content-left"> 
                <div class="router-link" 
                v-for="(item, index) in allData"
                v-text="item.type" 
                :key="item.type" 
                :class="{active: index===currentIndex}"
                @touchend="to(`/classify/${$route.params.type}/${$route.params.storeName}/goodslist/${item.type}`, index)"
                >
                </div> 
            </div> 
            <div class="store-content-right"> 
                <router-view></router-view> 
            </div>
        </div>
        <div class="shopping-car">
            <div class="shopping-car-icon">
                <div class="iconfont icon-gouwuche1 icon"></div>
            </div>
            <div class="left">
                <message class="left-msg" :price="sumPrice" :goodsCount="goodsCount"></message>
            </div>
            <div :class="rightClass">
                <div v-text="rightText" ></div>
                <span v-text.number="sumPrices"></span>
            </div>
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex';

const leftMessage = { 
    props: { 
        price: { 
            type: [Number],
        },
        goodsCount: {
            type: [Number],
            required: true,
        },
    },
    template: `
        <div> 
            <div v-if="!goodsCount" 
            style="line-height:.78rem;height:.78rem;
            color:#a3a3a4">
            未选购商品
            </div>
            <div v-else>
                <div class="sum-price" v-bind="price"></div>
                <div class="shipping-fee">配送费¥5</div>
            </div>
        </div>    
    `,
};

export default {
    data() {
        return {
            currentIndex: 0,
            goodsCount: 0,
            sumPrice: 0,
            minPrice: 20,
            rightClass: 'right',
            rightText: '¥0起送',
            allData: [],
        };
    },
    created() {
        this.axios({
            url: 'http://localhost:8080/mock/storedetaillist',
            method: 'GET',
        }).then((result) => {
            this.allData = result.data;
            this.to(`/classify/${this.$route.params.type}
            /${this.$route.params.storeName}
            /goodslist/${this.allData[0].type}`, 0);
            // 编程式导航
        }, (error) => {
            throw error;
        });
        this.bus.$emit('updataTitle', this.$route.params.storeName);
    },
    methods: {
        to(path, index) {
            this.$router.replace({path});
            this.currentIndex = index;
        },
    },
    computed: {
        ...mapGetters([
            'sumPrices'
        ])
    },
    components: {
        message: leftMessage,
    },
};
</script>

<style scoped lang="scss">
@import "../../css/style.scss";
/* iconfont icon-gouwuche1 */
.store-detial {
  display: flex;
}
.shopping-car {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.78rem;
  background-color: $deepBg;
  display: flex;
}
.left {
  flex: 0.72;
}
.right {
  flex: 0.28;
  background: #535356;
  text-align: center;
  line-height: 0.78rem;
  height: 0.78rem;
  color: #ffffff;
  font-size: 0.26rem;
}
.shopping-car-icon {
  position: absolute;
  left: 0.2rem;
  bottom: 0;
  height: 0.98rem;
  width: 0.98rem;
  border: 0.1rem #4d4d4f solid;
  background-color: #3d3d3d;
  border-radius: 50%;
  text-align: center;
  line-height: 0.78rem;
  box-sizing: border-box;
}
.icon {
  font-size: 0.5rem;
  color: #777777;
}
.left-msg {
  margin-left: 1.35rem;
}
.store-content {
  flex: 1;
  display: flex;
}
.store-content-left {
  flex: 3;
}
.store-content-right {
  flex: 7;
}
.router-link {
  height: 1.6rem;
  line-height: 1.6rem;
  text-align: center;
}
.active {
  background: $mainActive;
  color: $mainBgColor;
}
</style>
