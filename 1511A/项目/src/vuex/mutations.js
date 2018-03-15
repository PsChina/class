import * as types from './mutations-types';
export default {
    [types.CHANGE_MSG](state, value) {
        if ( state.msg != value ) {
            state.msg = value;
        }
    },
};
