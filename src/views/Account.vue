<template>
  <div>
      Account details
  </div>
</template>

<script>
export default {
    data() {
        return {
            loggedIn: false
        }
    },
    // this is how you technically can access component instance data in a beforeEnter route hook.
    // I would generally advise against this as you can use a different route hook - beforeRouteUpdate - instead.
    // the beforeRouteUpdate hook is called when the route transition has been confirmed but before it has been committed and has an identical footprint
    beforeRouteEnter(to, from, next) {
        return next(vm => {
            if (!vm.loggedIn) {
                return next({name: 'login'})
            }
            return
        })
    },
    mounted() {
        console.log('mounted');
    }
}
</script>

<style>

</style>