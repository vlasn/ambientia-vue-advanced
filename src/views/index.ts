import VueRouter from 'vue-router';
import Landing from './Landing.vue';
import Store from './Store.vue';
import Product from './Product.vue';
import Cart from './Cart.vue';
import Checkout from './Checkout.vue';
import Login from './Login.vue';
import Account from './Account.vue';

const storeBaseRoute = 'pood';

const routes = [
    {path: '/landing', component: Landing},
    {path: '/logi-sisse', name: 'login', component: Login},
    {path: '/konto', name: 'account', component: Account, meta: { requiresAuthentication: true }},
    {path: `/${storeBaseRoute}`, name: 'store', component: Store},
    {path: `/${storeBaseRoute}/:productId`, name: 'product', component: Product},
    {path: '/cart', component: Cart, children: [
        {path: 'checkout', component: Checkout}
    ], meta: { requiresAuthentication: true }},
    {path: '*', component: Landing}
]
const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    if (to.meta?.requiresAuthentication) {
        return next({ name: 'login' });
    }
    next()
});

export default router;
