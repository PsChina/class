<template>
  <div class="model-view" @touchend.self="close">
        <message :close="close"></message>        
  </div>
</template>

<script>
import message from './message.vue';
export default {
    props: {
        close: {
            type: [Function],
            required: true,
        },
        show: {
            type: [Boolean],
            required: true,
        },
    },
    components: {
        message,
    },
};
</script>

<style >
html,
body {
  width: 100%;
  height: 100%;
}
.model-view {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.15);
}

.fade-enter-active .message-box {
  animation: movein 0.3s ease-in;
}
.fade-leave-active .message-box {
  animation: moveout 0.3s ease-out;
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
    background-color: #e5e5e5;
  }
  to {
    position: fixed;
    left: 0;
    bottom: -3.16rem;
    background-color: #e5e5e5;
  }
}
</style>
