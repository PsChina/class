<template>
    <div class="message-box" :class="active">
        <div>转发</div>
            <div class="middle">关于饿了么外卖服务</div>
        <div @touchend.prevent="close">取消</div>
    </div>
</template>

<script>
export default {
    props: {
        close: {
            type: [Function],
            required: true,
        },
    },
    data() {
        return {
            active: '',
        };
    },
    activated() {
        this.active = 'move-enter-active';
    },
    deactivated() {
        this.active = 'move-leave-active';
    },
};
</script>

<style lang="scss">
@import "../../css/style.scss";
.message-box {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: #e5e5e5;
  z-index: 1000;
}
.message-box div {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.35rem;
  color: #000000;
  background-color: $mainBgColor;
}
.middle {
  margin-top: 0.04rem;
  margin-bottom: 0.12rem;
}

.move-enter-active {
  animation: movein 0.3s ease-in-out;
}

.move-leave-active {
  animation: moveout 1s ease-in-out;
}

@keyframes movein {
  from {
    position: fixed;
    left: 0;
    bottom: -3.16rem;
  }
  to {
    position: fixed;
    left: 0;
    bottom: 0;
  }
}

@keyframes moveout {
  from {
    position: fixed;
    left: 0;
    bottom: 0;
  }
  to {
    position: fixed;
    left: 0;
    bottom: -3.16rem;
  }
}
</style>
