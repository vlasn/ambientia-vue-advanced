import Vue from 'vue';
import Vuex from 'vuex';

import productsStore from './products';
import cartStore from './cart';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        products: productsStore,
        cart: cartStore
    }
});

export default store;