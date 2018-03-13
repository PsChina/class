import Vue from './common/vue.js';
import heads from './component/head.vue';
console.log(heads)
new Vue({
    el:'#app',
    data:{

    },
    methods:{

    },
    components:{ //局部注册组件
        heads
    },
    created(){
        console.log('Vue 应用已经创建')
    }
})