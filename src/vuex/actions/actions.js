export default {
    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product);
    },
    DELETE_CART_ITEM_FROM_CART({commit}, index) {
        commit('REMOVE_CART_ITEM_FROM_CART', index);
    },
    DECREMENT_CART_ITEM({commit}, index) {
        commit('DECREMENT_CART', index)
    },
    INCREMENT_CART_ITEM({commit}, index) {
        commit('INCREMENT_CART', index);
    },
    UPDATE_SELECTED_CATEGORY({commit}, value) {
        commit('CHANGE_STATE_SELECTED_CATEGORY', value);
    },
    // async LOGOUT({commit}){
    //     let user = null;
    //     commit('LOGOUT', user);
    // }  
}