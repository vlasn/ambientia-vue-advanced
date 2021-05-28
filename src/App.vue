<template>
  <MainLayout id="app">
    <template v-slot:header>
      <Header />
    </template>
    <router-view />
    <template v-slot:footer>
      Footer
    </template>
  </MainLayout>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.separator {
  width: 100px;
  height: 10px;
  background-color: tomato;
}
</style>
