import axios from "axios";

const API_BASE_URL = 'https://my-json-server.typicode.com/TanyaKulikovskaya/Vue-Online-Shop'

export default {
    async GET_PRODUCTS_FROM_API({commit}) {
        commit('CHANGE_STATE_IS_PRODUCTS_LOADING', true);
        commit('CHANGE_STATE_IS_ERROR_PRODUCTS_LOADING', false);
        try {
            const products = await axios.get(API_BASE_URL + '/products');
            commit('SET_PRODUCTS_TO_STATE', products.data);
        }
        catch {
            commit('CHANGE_STATE_IS_ERROR_PRODUCTS_LOADING', true);
        }
        finally {
            commit('CHANGE_STATE_IS_PRODUCTS_LOADING', false);
        }
    },
    async GET_PRODUCT_FROM_API({commit}, id) {
        commit('CHANGE_STATE_IS_PRODUCT_LOADING', true);
        commit('CHANGE_STATE_IS_ERROR_PRODUCT_LOADING', false);
        try {
            const product = await axios.get(API_BASE_URL + '/products/' + `${id}`);
            commit('SET_PRODUCT_TO_STATE', product.data);
        }
        catch {
            commit('CHANGE_STATE_IS_ERROR_PRODUCT_LOADING', true);
        }
        finally {
            commit('CHANGE_STATE_IS_PRODUCT_LOADING', false);
        }
    },
    async GET_CATEGORIES_FROM_API({commit}) {
        try {
            const categories = await axios.get(API_BASE_URL + '/categories');
            commit('SET_CATEGORIES_TO_STATE', categories.data);
        }
        catch(error) {
            console.log(error);
        }
    }
}