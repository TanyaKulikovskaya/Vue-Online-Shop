import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import commonActions from './actions/actions';
import apiRequests from './actions/api-requests';
import mutations from './mutations/mutations';
import getters from './getters/getters';

const actions = {...commonActions, ...apiRequests};

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        product: {},
        cart: [],
        isProductLoading: false,
        isProductLoadingError: false,
        isLoadingProducts: false,
        isErrorLoadingProducts: false,
        categories: [],
        selectedCategory: 'All'
    },
    mutations,
    actions,
    getters,
    plugins: [createPersistedState()]
});

export default store;