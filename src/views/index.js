import VueRouter from 'vue-router';
import Landing from './Landing';
import Store from './Store';
import Product from './Product';


const routes = [
    {path: '/landing', component: Landing},
    {path: '/store', component: Store},
    {path: '/store/:productId', component: Product},
    {path: '*', component: Landing}
]

export default new VueRouter({
    routes,
    mode: 'history'
});
