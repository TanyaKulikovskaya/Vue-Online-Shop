import Vue from 'vue'
import Router from 'vue-router'

const vCatalog = () => import('../views/v-catalog')
const vProduct = () => import('../views/v-product')
const vCart = () => import('../views/v-cart')

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