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
  </div>
</template>

<script>
export default {
    name: 'Header'
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