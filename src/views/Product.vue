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
    </div>
  </div>
</template>

<script>
import { getProduct } from '../client';

export default {
    name: 'Product',
    computed: {
        productId() {
            return this.$route.params.productId
        }
    },
    data() {
        return {
            product: {},
            loading: true
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