import { createCart, getCart } from '../client';
/*
{
    id: string,
    cart: []
}

*/
const cart = {
    data() {
       return {
           cart: null,
           id: ''
       }
    },
    methods: {
        scaffoldCart() {
            let cartId = localStorage.getItem('cartId');
            if (cartId === null) {
                createCart()
                    .then(({id, cart}) => {
                        this.cart = cart,
                        this.id = id
                        localStorage.setItem('cartId', id)
                    })
            } else {
                getCart(cartId)
                    .then(items => {
                        this.cart = items,
                        this.id = cartId
                    })
            }
        }
    },
    mounted() {
        this.scaffoldCart();
    }
}

export default cart;