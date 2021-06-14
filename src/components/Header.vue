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
    <div class="store-link">
      <router-link :to="{name: 'cart'}" class="store-link">
        Cart ({{ numberOfItemsInCart }})
      </router-link>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Header',
    data() {
      return {
        message: 'I am a header'
      }
    },
    computed: {
      ...mapGetters('cart', ['numberOfItemsInCart'])
    },
    methods: {
      ...mapActions('cart', ['scaffoldCart'])
    },
    mounted() {
      this.scaffoldCart();
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