import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/router'
import VueCurrencyFilter from 'vue-currency-filter'
import formattedTitle from './filters/title-format'

Vue.config.productionTip = false

Vue.use(
    VueCurrencyFilter,
    {
        symbol: '$',
        thousandsSeparator: ',',
        fractionCount: 2,
        fractionSeparator: '.',
        symbolPosition: 'front',
        symbolSpacing: true
    }
)

Vue.filter('formattedTitle', formattedTitle)

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
