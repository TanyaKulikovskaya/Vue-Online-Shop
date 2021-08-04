import Vue from 'vue'
import Router from 'vue-router'

import vCatalog from '../components/catalog/v-catalog'
import vProduct from '../components/product/v-product'
import vCart from '../components/cart/v-cart'

Vue.use(Router);

let router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: vCatalog,
        },
        {
            path: '/products/:id',
            name: 'product',
            component: vProduct,
        },
        {   path: '/cart',
            name: 'cart',
            component: vCart,
            props: true
        }
    ]
})

export default router;