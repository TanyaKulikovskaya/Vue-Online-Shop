import axios from "axios";

const API_BASE_URL = 'https://my-json-server.typicode.com/TanyaKulikovskaya/Vue-Online-Shop'


//const API_BASE_URL = 'http://localhost:3000'
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
    },
    register({commit}, data) {
        return axios.post(API_BASE_URL + '/users', {
            email: data.email,
            password: data.password
        })
            .then((res)=> {
                const token = res.data.accessToken;
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = token;
                commit('AUTH_SUCCESS', token);
            })
            .catch(() =>{
                localStorage.removeItem('token');
                commit('AUTH_ERROR');
            })
    },
    login({commit}, credentials) {
        return axios.post(API_BASE_URL + '/login', {                
            email: credentials.email,
            password: credentials.password
        })
            .then((res)=> {
                const token = res.data.accessToken;
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = token;
                commit('AUTH_SUCCESS', token);
            })
            .catch(() => {
                localStorage.removeItem('token');
                commit('AUTH_ERROR');
            }) 
    },
    LOGOUT({commit}) {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        commit('SET_LOGOUT');
    }
}