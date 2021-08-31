<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from '@/components/3_organisms/Header.vue'

export default {
  components: {
    Header
  },
  watch: {
    $route (to, from) {
      document.title = to.meta.title || 'vue playground'
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
