export default { // actions = methods
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
    }   
}