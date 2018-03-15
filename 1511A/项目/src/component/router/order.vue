<template>
  <div class="order">
      <div>
          订单
          <input type="text" v-model="newVal">
          <button @touchend="changeMsg">change</button>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: '订单',
            newVal: null,
        };
    },
    methods: {
        changeMsg() {
            this.$store.dispatch('changeMsg', this.newVal);
        },
    },
    created() {
        this.bus.$emit('updataTitle', this.title);
    },
};
</script>

<style scoped>
    .order{
        font-size: .24rem;
    }
    .order input,.order button {
        font-size: .24rem;
    }
</style>