import VueRouter from 'vue-router';
import Landing from './Landing';
import Store from './Store';
import Product from './Product';
import Cart from './Cart';
import Checkout from './Checkout';
import Login from './Login';
import Account from './Account';

const storeBaseRoute = 'pood';

const routes = [
    {path: '/landing', component: Landing},
    {path: '/logi-sisse', name: 'login', component: Login},
    {path: '/konto', name: 'account', component: Account },
    {path: `/${storeBaseRoute}`, name: 'store', component: Store},
    {path: `/${storeBaseRoute}/:productId`, name: 'product', component: Product},
    {path: '/cart', component: Cart, children: [
        {path: 'checkout', component: Checkout}
    ]},
    {path: '*', component: Landing}
]

export default new VueRouter({
    routes,
    mode: 'history'
});
