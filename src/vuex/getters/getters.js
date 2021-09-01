export default { // getters = computed properties
    PRODUCTS(state) {
        return state.products;
    },
    PRODUCT(state) {
        return state.product;
    },
    CART(state) {
        return state.cart;
    },
    IS_LOADING_PRODUCT(state) {
        return state.isLoadingProduct;
    },
    IS_ERROR_LOADING_PRODUCT(state) {
        return state.isErrorLoadingProduct;
    },
}