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

<script lang='ts'>
import Vue from 'vue';
import { getProduct } from '../client';
import { DetailedProduct } from '../types/product.types';

interface IProductData {
    product: DetailedProduct | null;
    loading: boolean;
}

export default Vue.extend({
    name: 'Product',
    computed: {
        productId() {
            return this.$route.params.productId
        }
    },
    data(): IProductData {
        return {
            product: null,
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

});
</script>

<style>

</style>