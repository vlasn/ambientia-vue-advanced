<template>
  <div>
    <div class="Filter">
      <input :value="searchTerm" @input="onInput" placeholder='Filter results'/>
    </div>
    <div class="Products">
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
import { mapActions, mapState } from 'vuex';

export default {
  name: "Store",
  components: {
    ProductListing,
  },
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
    onInput(event) {
      this.searchTerm = event.target.value;
    },
    onNewProduct(data) {
      this.products.push(data);
    },
  },
  computed: {
    ...mapState('products', ['products']),
    productList() {
      return this.products.map((product) => ({
        name: product.name,
        id: product.id,
        pictureUrl: product.pictureUrl,
      }));
    },
    filteredProducts() {
      return this.productList.filter((product) => {
        return product.name.toLowerCase().search(this.searchTerm.toLowerCase()) > -1;
      });
    },
    productCount() {
      return this.products.length;
    },
  },
  mounted() {
    this.fetchProducts()
  }
};
</script>

<style>
  .Products {
    margin: 20px auto;
    display: inline-grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
</style>