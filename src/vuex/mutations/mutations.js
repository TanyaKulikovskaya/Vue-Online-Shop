export default { // setting and updating the state
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
    REMOVE_FROM_CART: (state, index) => {
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
    }
}