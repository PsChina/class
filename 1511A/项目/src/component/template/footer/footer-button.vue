<template>
    <div class="footer-button">
         <router-link active-class="active" class="link" tag="div" :to="path" >
            <div class="button-icon iconfont" :class="btnIcon"></div>
            <div class="button-text" v-text="btnText"></div>
         </router-link>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: [String],
        },
        icon: {
            type: [String],
        },
        path: {
            type: [String],
        },
    },
    computed: {
        btnText() {
            return this['text'] || '';
        },
        btnIcon() {
            return this['icon'] || '';
        },
    },
};
</script>

<style scoped lang="scss">
@import "../../../css/style.scss";
.footer-button {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.button-icon {
  flex: 7.7;
  text-align: center;
  font-size: 0.45rem;
  color: $mainTextColor;
  padding-top: 0.05rem;
}
.button-text {
  flex: 2.3;
  font-size: 0.28rem;
  color: $mainTextColor;
  text-align: center;
}
.link {
  flex: 1;
}
.active .button-icon,
.active .button-text {
  color: $mainActive;
}
</style>
