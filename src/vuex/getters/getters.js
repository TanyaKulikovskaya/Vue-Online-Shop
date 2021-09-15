export default {
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
    IS_LOADING_PRODUCTS(state) {
        return state.isLoadingProducts;
    },
    IS_ERROR_LOADING_PRODUCTS(state) {
        return state.isErrorLoadingProducts;
    },
    CATEGORIES(state) {
        return state.categories;
    },
    IS_LOGGED_IN(state) {
        return !!state.token;
    },
    AUTH_STATUS(state) {
        return state.authStatus;
    }
}