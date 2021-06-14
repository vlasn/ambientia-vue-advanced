<template>
  <div class='Header'>
    <div class="store-link">
      <router-link :to="{name: 'store'}" class="store-link">
        Store
      </router-link>
    </div>
    <div class="store-link">
      <router-link to='/landing' class="store-link">
        Home
      </router-link>
    </div>
    <div class="store-link">
      <router-link :to="{name: 'account'}" class="store-link">
        Account
      </router-link>
    </div>
    <button @click="addItem">Click me</button>
  </div>
</template>

<script>
import cart from '../mixins/cart';

export default {
    name: 'Header',
    mixins: [cart],
    data() {
      return {
        message: 'I am a header'
      }
    },
    methods: {
      addItem() {
        this.addItemToCart('a3aa5fb7-595d-4184-85d2-ddb561ad59d6')
      }
    }
}
</script>

<style scoped>
.Header {
  background-color: rgb(250, 250, 250);
  display: flex;
  justify-content: center;
}

.store-link {
  padding:20px;
  font-size: 20px;
}
.store-link:hover {
  background-color: white;
}
</style>