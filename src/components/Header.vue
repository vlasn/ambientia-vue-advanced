<template>
  <div class='Header'>
    <div class="store-link">
      <router-link to='/store' class="store-link">
        Store
      </router-link>
    </div>
    <div class="store-link">
      <router-link to='/' class="store-link">
        Home
      </router-link>
    </div>
    {{ message }}
    <button @click="printMessage">Click me</button>
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
      printMessage() {
        console.log('I am inside the component')
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