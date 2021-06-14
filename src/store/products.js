import { getProducts } from '../client';

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_LOADING = 'SET_LOADING';

const productsStore = {
    namespaced: true,
    state: () => ({
        products: [],
        loading: true
    }),
    mutations: {
        [SET_PRODUCTS](state, products) {
            if (products) {
                state.products = products;
            }
        },
        [SET_LOADING](state, loading) {
            state.loading = loading
        }
    },
    getters: {
      
    },
    actions: {
        async fetchProducts({ commit }) {
            const products = await getProducts();
            console.log(products);
            commit(SET_LOADING, false);
            commit(SET_PRODUCTS, products);
        }
    }
}

export default productsStore;
