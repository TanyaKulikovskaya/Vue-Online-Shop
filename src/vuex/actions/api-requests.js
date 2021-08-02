import axios from "axios";

export default { // actions = methods
    GET_PRODUCTS_FROM_API({commit}) {
        return axios.get('http://localhost:3000/products')
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    },
    GET_PRODUCT_FROM_API({commit}, id) {
        return axios.get(`http://localhost:3000/products/${id}`)
            .then((product) => {
                commit('SET_PRODUCT_TO_STATE', product.data);
                return product;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    }
}