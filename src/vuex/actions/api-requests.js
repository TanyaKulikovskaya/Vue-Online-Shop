import axios from "axios";

const API_BASE_URL = 'https://my-json-server.typicode.com/TanyaKulikovskaya/Vue-Online-Shop'

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        commit('CHANGE_STATE_IS_PRODUCTS_LOADING', true);
        commit('CHANGE_STATE_IS_ERROR_PRODUCTS_LOADING', false);
        return axios
            .get(API_BASE_URL + '/products')
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
            })
            .catch(() => {
                commit('CHANGE_STATE_IS_ERROR_PRODUCTS_LOADING', true)
            })
            .finally(() => {
                commit('CHANGE_STATE_IS_PRODUCTS_LOADING', false)
            })
    },
    GET_PRODUCT_FROM_API({commit}, id) {
        commit('CHANGE_STATE_IS_PRODUCT_LOADING', true);
        commit('CHANGE_STATE_IS_ERROR_PRODUCT_LOADING', false);
        return axios
            .get(API_BASE_URL + '/products/' + `${id}`)
            .then((product) => {
                commit('SET_PRODUCT_TO_STATE', product.data);
            })
            .catch(() => {
                commit('CHANGE_STATE_IS_ERROR_PRODUCT_LOADING', true)
            })
            .finally(() => {
                commit('CHANGE_STATE_IS_PRODUCT_LOADING', false)
            })
    },
    GET_CATEGORIES_FROM_API({commit}) {
        return axios
            .get(API_BASE_URL + '/categories')
            .then((categories) => {
                commit('SET_CATEGORIES_TO_STATE', categories.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
}