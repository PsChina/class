<template>
    <div> 
        <p v-text="goodsName"></p>
        <p v-text="goodsPrice"></p>
        <div> <img :src="goodsIcon" alt=""></div>
        <div class="count-btn-box"> 
            <div class="flex-item" @touchend="reduce">-</div> 
            <div class="flex-item" v-text="number"></div> 
            <div class="flex-item" @touchend="add">+</div> 
        </div>
    </div>
</template>

<script>
export default {
    props: ['goodsName', 'goodsPrice', 'goodsIcon', 'index'],
    data() {
        return {
            number: 0,
        };
    },
    methods: {
        reduce() {
            if (this.number>0) {
                this.number--;
                this.$store.state[`goods${this.index+1}Price`] =
                    this.number*this.goodsPrice;
            }
        },
        add() {
            this.number++;
            this.$store.state[`goods${this.index+1}Price`] =
                this.number*this.goodsPrice;
        },
    },
};
</script>

<style scoped>
.count-btn-box{
    display: flex;
}
.flex-item{
    flex: 1;
}
</style>
