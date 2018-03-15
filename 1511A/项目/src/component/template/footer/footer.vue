<template>
    <div class="footer" v-show="show">
        <btn  v-for="item in data" 
              :key="item.path" 
              :text="item.text" 
              :icon="item.icon"
              :path="item.path" 
              >
        </btn>
    </div>
</template>

<script>
import btn from './footer-button.vue';

export default {
    props: {
        data: {
            type: [Array, Object],
            required: true,
        },
    },
    data() {
        return {
            show: true,
        };
    },
    components: {
        btn,
    },
    created() {
        this.bus.$on('hideTabBar', () => {
            this.show = false;
        });
        this.bus.$on('showTabBar', () => {
            this.show = true;
        });
    },
    beforeDestroy() {
        this.bus.$off('hideTabBar');
        this.bus.$off('showTabBar');
    },
};
</script>

<style scoped lang="scss">
@import "../../../css/style.scss";
.footer {
  display: flex;
  height: 0.98rem;
  border-top: 0.02rem $mainBorderColor solid;
}
</style>
