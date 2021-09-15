import Vue from 'vue';
import Router from 'vue-router';

const Catalog = () => import('../views/catalog');
const Product = () => import('../views/product');
const Cart = () => import('../views/cart');
const Login = () => import('../views/login');
const Register = () => import('../views/register');

import store from '../vuex/store'

Vue.use(Router);

let router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: Catalog,
        },
        {
            path: '/products/:id',
            name: 'product',
            component: Product,
        },
        {   path: '/cart',
            name: 'cart',
            component: Cart,
            meta: { 
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: "login",
            component: Login,
            
        },
        {
            path: '/register',
            name: "register",
            component: Register,
            
        },
    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.IS_LOGGED_IN) {
            next()
            return
        }
        next('/login') 
    } else {
        next() 
    }
})



export default router;