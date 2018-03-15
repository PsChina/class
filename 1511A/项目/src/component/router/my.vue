<template>
  <div>
      <div>
          我的

          <div v-text="$store.state.msg"></div>
         
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: '我的',
            newVal: null,
        };
    },
    created() {
        this.bus.$emit('updataTitle', this.title);
    },
};
</script>

<style>

</style>