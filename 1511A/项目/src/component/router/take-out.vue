<template>
  <div>
      <div>
          外卖
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: '外卖',
        };
    },
    components: {
    },
    created() {
        this.bus.$emit('updataTitle', this.title);
    },
};
</script>

<style>

</style>