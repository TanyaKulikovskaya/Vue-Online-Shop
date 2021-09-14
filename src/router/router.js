import Vue from 'vue';
import Router from 'vue-router';

const Catalog = () => import('../views/catalog');
const Product = () => import('../views/product');
const Cart = () => import('../views/cart');
const Login = () => import('../views/login');

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
        },
        {
            path: '/login',
            name: "login",
            component: Login,
            
        },
    ]
});



export default router;