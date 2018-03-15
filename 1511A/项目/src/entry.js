import Vue from 'vue';
import '../index.html';
import rem from './js/base/rem';
import './css/style.css';
import './iconfont/iconfont.css';
import './shoppingCar/iconfont.css';
import VueRouter from 'vue-router';
import {routes} from './js/common/routes';
import header from './component/template/header/header.vue';
import footer from './component/template/footer/footer.vue';
import bus from './js/plugin/bus.js';
import format from './js/plugin/formatParams.js';
import axios from 'axios';
import store from './vuex/store';
import MintUI from 'mint-ui';
import {Loadmore} from 'mint-ui';
Vue.use(MintUI);
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'; // 没有按需引入

// Vue.use(ElementUI);
Vue.component(Loadmore.name, Loadmore);

Vue.prototype.axios = axios;

rem(3.2);

const router = new VueRouter({
    routes,
});

// 全局路由钩子 不会对任何路由有区别对待
router.beforeEach((to, from, next) => {
    console.log('beforeEach');
    next();
});
router.beforeResolve((to, from, next) => {
    console.log('beforeResolve');
    next();
});
router.afterEach((to, from) => {
    console.log('aftherEach');
});

// VueRouter 是一个插件 需要 use 一下 。
Vue.use(VueRouter); // 使用 vue 插件 vue-router.

Vue.use(bus);

Vue.use(format);

new Vue({
    el: '#app',
    data() {
        return {
            msg: 'Hello!',
            list: [
                {text: '外卖', path: '/takeout', icon: 'icon-changyonglogo40'},
                {text: '分类', path: '/classify', icon: 'icon-fenlei'},
                {text: '订单', path: '/order', icon: 'icon-icon-'},
                {text: '我的', path: '/my', icon: 'icon-home'},
            ],
            data: [
                {text: '外卖', path: '/takeout', icon: 'icon-changyonglogo40'},
                {text: '分类', path: '/classify', icon: 'icon-fenlei'},
                {text: '订单', path: '/order', icon: 'icon-icon-'},
                {text: '我的', path: '/my', icon: 'icon-home'},
            ],
            title: '外卖',
            ceshi1: false,
            ceshi2: false,
            ceshi3: false,
            num1: 0,
            loadmore: 'loadmore',
        };
    },
    methods: {
        change(val) {
            console.log(val);
        },
        loadTop() {
            console.log('top事件触发');
            this.axios({
                url: '../json.json',
                method: 'GET',
            })
                .then( (result)=>{
                    this.data = this.data.concat(result.data);
                    this.$refs[this.loadmore].onTopLoaded();
                }, (error)=>{
                    throw new Error(error);
                } );
        },
    },
    router,
    store,
    components: {
        tabBar: footer,
        navigation: header,
    },
});
