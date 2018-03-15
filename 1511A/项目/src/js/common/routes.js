import takeOut from '../../component/router/take-out.vue';
import classify from '../../component/router/classify.vue';
import order from '../../component/router/order.vue';
import my from '../../component/router/my.vue';
import storeList from '../../component/router/storelist.vue';
import storeDetail from '../../component/router/storedetail.vue';
import listView from '../../component/router/goodslist.vue';

export const routes = [
    {path: '/', redirect: '/takeout'},
    {path: '/takeout', component: takeOut, beforeEnter: (to, from, next) => {
        // 路由独享钩子
        console.log('takeout beforeEnter');
        next();
    },
    },
    {path: '/classify', component: classify},
    {path: '/classify/:type', component: storeList},
    {
        path: '/classify/:type/:storeName',
        component: storeDetail,
        children: [
            {
                path: 'goodslist/:foodtype',
                component: listView,
            },
        ],
    },
    {path: '/order', component: order},
    {path: '/my', component: my},
];

export default routes;
