<template>
  <div>
    <div class="">
      <input :value="message" @input="onInput" />
    </div>
    <div class="products">
      <ProductListing
        v-for="product in filteredProducts"
        :key="product.id"
        v-bind="product"
      />
    </div>
    <div>total: {{ productCount }}</div>
  </div>
</template>

<script>
import ProductListing from "../components/ProductListing";
import { getProducts } from '../client';

export default {
  name: "Store",
  components: {
    ProductListing,
  },
  data() {
    return {
      message: "",
      products: []
    };
  },
  methods: {
    onInput(event) {
      console.log(event);
      this.message = event.target.value;
    },
    onNewProduct(data) {
      this.products.push(data);
    },
  },
  computed: {
    productList() {
      return this.products.map((product) => ({
        name: product.name,
        id: product.id,
        pictureUrl: product.pictureUrl,
      }));
    },
    filteredProducts() {
      return this.productList.filter((product) => {
        return product.name.startsWith(this.message);
      });
    },
    productCount() {
      return this.products.length;
    },
  },
  mounted() {
      getProducts()
        .then(data => {
            this.products = data;
        })
  }
};
</script>

<style>
</style>