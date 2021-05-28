<template>
  <div class="MainLayout">
      <header class="MainLayout_header">
          <slot name="header">
            <h1>Welcome to my app!</h1>
          </slot>
      </header>
      <div class="MainLayout_content">
          <slot name="default"/>
      </div>
      <footer class="MainLayout_footer">
        <slot name="footer">
            <p>Thanks for viewing!</p>
        </slot>
      </footer>
  </div>
</template>

<script>
export default {
    name: 'MainLayout'
}
</script>

<style>
.MainLayout {
    display: grid;
    grid-template-rows: 50px 1fr auto;
    grid-template-columns: 1fr;
    height: 100%;
}
</style>