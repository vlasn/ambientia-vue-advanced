import { createCart, getCart, updateCart } from '../client';

const SET_CART = 'SET_CART';
const SET_ITEMS = 'SET_ITEMS';
const SET_LOADING = 'SET_LOADING';

const cartStore = {
    namespaced: true,
    state: () => ({
        id: null,
        items: [],
        loading: false
    }),
    mutations: {
        [SET_CART](state, { id, items }) {
            state.items = items;
            state.id = id;
        },
        [SET_LOADING](state, loading) {
            state.loading = loading
        },
        [SET_ITEMS](state, items) {
            state.items = items
        }
    },
    getters: {
      numberOfItemsInCart: (state) => state.items.length
    },
    actions: {
        scaffoldCart({ commit }) {
            let cartId = localStorage.getItem('cartId');
            if (cartId === null) {
                createCart()
                    .then(({id, cart}) => { // mutate state
                        commit(SET_CART, {id: id, items: cart})
                        localStorage.setItem('cartId', id)
                    })
            } else {
                getCart(cartId)
                    .then(items => { // mutate state
                        commit(SET_CART, {id: cartId, items})
                    })
            }
            commit(SET_LOADING, false)
        },
        async addItemToCart({ commit, state }, productId) {
            commit(SET_LOADING, true)
            const { id } = state;
            const updatedItems = await updateCart(id, productId);
            console.log(updatedItems);
            commit(SET_ITEMS, updatedItems);
            commit(SET_LOADING, false)
        }
    }
}

export default cartStore;
