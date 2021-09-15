export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },
    SET_PRODUCT_TO_STATE: (state, product) => {
        state.product = product;
    },
    SET_CART: (state, product) => {
        if(state.cart.length) {
            let isProductExist = false;
            state.cart.find(item => {
                if(item.id === product.id) {
                    isProductExist = true;
                    item.quantity++;
                }
            });
            if(!isProductExist) {
                state.cart.push({
                    ...product,
                    'quantity': 1
                });
            }
        } else {
            state.cart.push({
                ...product,
                'quantity': 1
            });
        }
    },
    REMOVE_CART_ITEM_FROM_CART: (state, index) => {
        state.cart.splice(index, 1);
    },
    DECREMENT_CART: (state, index) => {
        if(state.cart[index].quantity > 1) {
            state.cart[index].quantity--
        }
    },
    INCREMENT_CART: (state, index) => {
        state.cart[index].quantity++;
    },
    CHANGE_STATE_IS_PRODUCT_LOADING: (state, loading) => {
        state.isLoadingProduct = loading;
    },
    CHANGE_STATE_IS_ERROR_PRODUCT_LOADING: (state, loading) => {
        state.isErrorLoadingProduct = loading;
    },
    CHANGE_STATE_IS_PRODUCTS_LOADING: (state, loading) => {
        state.isLoadingProducts = loading;
    },
    CHANGE_STATE_IS_ERROR_PRODUCTS_LOADING: (state, loading) => {
        state.isErrorLoadingProducts = loading;
    },
    SET_CATEGORIES_TO_STATE(state, categories) {
        state.categories = categories;
    },
    CHANGE_STATE_SELECTED_CATEGORY(state, value) {
        state.selectedCategory = value;
    },
    AUTH_SUCCESS(state, token) {
        state.status = 'success';
        state.token = token;
    },
    AUTH_ERROR(state) {
        state.status = 'error';
    },
    SET_LOGOUT(state) {
        state.token = '';
        state.authStatus = '';
    }
}