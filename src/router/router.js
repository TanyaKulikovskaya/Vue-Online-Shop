import Vue from 'vue'
import Router from 'vue-router'

const vCatalog = () => import('../components/catalog/v-catalog')
const vProduct = () => import('../components/product/v-product')
const vCart = () => import('../components/cart/v-cart')

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