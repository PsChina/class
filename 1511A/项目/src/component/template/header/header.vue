<template>
    <div class="header-box">
        <div class="iconfont icon-fanhui" @touchend="goBack"></div>
        <div class="title" v-text="title"></div>
        <div class="iconfont icon-gengduo" @touchend="openModalView"></div>
        <keep-alive>
            <transition name="fade">
                <modal-view v-show="open" :close="closeModalView" :show="open"></modal-view>            
            </transition>
        </keep-alive>
    </div>
</template>

<script>
import modalView from '../../modalviews/modalview.vue';
export default {
    data() {
        return {
            open: false,
            newTitle: false,
        };
    },
    props: {
        titleText: {
            type: [String],
        },
    },
    computed: {
        title: {
            set(newTitle) {
                this.newTitle = newTitle;
            },
            get() {
                return this.newTitle || this.titleText;
            },
        },
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        closeModalView() {
            this.bus.$emit('closeModalView');
            this.open = false;
        },
        openModalView() {
            this.open = true;
        },
    },
    components: {
        modalView,
    },
    created() {
        this.bus.$on('updataTitle', (newTitle) => {
            this.title = newTitle;
        });
    },
    beforeDestroy() {
        this.bus.$off('updataTitle');
    },
};
</script>

<style scoped lang="scss">
@import "../../../css/style.scss";
.header-box {
  display: flex;
  height: 0.8rem;
  background-color: $mainColor;
}
.title {
  flex: 1;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.38rem;
  color: white;
}
.iconfont {
  width: 1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  color: white;
  font-size: 0.4rem;
  text-align: center;
}
.fade-enter-active {
  transition: opacity 0.3s ease-in;
}
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
