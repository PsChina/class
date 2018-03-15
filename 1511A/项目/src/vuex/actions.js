import * as types from './mutations-types.js';
export default {
    changeMsg(context, val) {
        context.commit(types.CHANGE_MSG, val);
    },
};
