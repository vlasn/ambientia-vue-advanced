<template>
  <div>
    <div class="Filter">
      <input :value="searchTerm" @input="onInput" placeholder='Filter results'/>
    </div>
    <div class="Products">
      <ProductListing
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div>total: {{ productCount }}</div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import ProductListing from "../components/ProductListing.vue";
import { getProducts } from '../client';
import { Product } from '../types/product.types';

interface IStoreData {
  searchTerm: string;
  products: Array<Product>;
}

export default Vue.extend({
  name: "Store",
  components: {
    ProductListing,
  },
  data(): IStoreData {
    return {
      searchTerm: "",
      products: []
    };
  },
  methods: {
    onInput(event: Event): void {
      console.log(this.searchTerm);
      const target = event.target as HTMLInputElement;
      this.searchTerm = target.value;
    },
    onNewProduct(): void {
      // this.products.push(data);
    },
  },
  computed: {
    productList(): Product[] {
      return this.products.map((product) => ({
        name: product.name,
        id: product.id,
        pictureUrl: product.pictureUrl,
      }));
    },
    filteredProducts(): Product[] {
      return this.productList.filter((product) => {
        return product.name.toLowerCase().search(this.searchTerm.toLowerCase()) > -1;
      });
    },
    productCount(): number {
      return this.products.length;
    },
  },
  mounted() {
      getProducts()
        .then(data => {
            this.products = data;
        })
  }
});
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