export default {
    changeMsg(state) {
        return state.msg.replace('Vuex!', 'getters!');
    },
    sumPrices(state) {
        return state.goods1Price + state.goods2Price + state.goods3Price;
    },
};
