<template>
    <div class="ProductListing" @click='navigateToProduct'>
        <div class="ProductImage">
            <img :src="product.pictureUrl" />
        </div>
        <div class="ProductName">
            {{product.name}}
        </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Product } from '../types/product.types';

export default Vue.extend({
    name: 'ProductListing',
    props: {
        product: {
            type: Object as () => Product,
            required: true
        }
    },
    methods: {
        navigateToProduct(): void {
            this.$router.push({ name: 'product', params: { productId: this.product.id }})
        }
    }
})
</script>

<style>
.ProductListing {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 200px;
    border-radius: 5px;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
}

.ProductListing:hover {
        box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.2);
}

.ProductImage {
    max-width: 200px;
    height: 350px;
    display: flex;
    background-color: rgb(237, 248, 255);
}
.ProductImage > img {
    width: 100%;
    margin: auto;
}

.ProductName {
    font-size: 20px;
}
</style>