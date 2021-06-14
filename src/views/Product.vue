<template>
  <div>
    <div v-if="loading">
        Loading...
    </div>
    <div v-else>
        <router-link :to="{name: 'store'}">
            Go back
        </router-link>
        <h3>{{product.name}}</h3>
        <img :src="product.pictureUrl"/>
        <p>
            {{product.description}}
        </p>
        <span>Price: {{product.price}}€</span>
        <BeautifulButton @click="addToCart" v-if="!isAlreadyInCart">
            Add to cart
        </BeautifulButton>
    </div>
  </div>
</template>

<script>
import { getProduct } from '../client';
import { mapActions, mapState } from 'vuex';
import BeautifulButton from '../components/BeautifulButton.vue';

export default {
  components: { BeautifulButton },
    name: 'Product',
    computed: {
        ...mapState('cart', ['items']),
        productId() {
            return this.$route.params.productId
        },
        isAlreadyInCart() {
            return this.items.some(item => item.id === this.productId)
        }
    },
    data() {
        return {
            product: {},
            loading: true
        }
    },
    methods: {
        ...mapActions('cart', ['addItemToCart']),
        addToCart() {
            this.addItemToCart(this.productId)
        }
    },
    mounted() {
        getProduct(this.productId)
            .then(product => {
                this.loading = false;
                this.product = product;
            });
    }

}
</script>

<style>

</style>