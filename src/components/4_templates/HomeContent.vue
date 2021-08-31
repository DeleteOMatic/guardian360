<template>
  <section class="section-home">
    <main class="container">
      <h2>Home</h2>
      <FibonacciTile />
    </main>
  </section>
</template>
<script>
import FibonacciTile from '@/components/3_organisms/FIbonacciTile.vue'
import Header from '@/components/3_organisms/Header.vue'

export default {
  name: 'HomeContent',
  components: {
    FibonacciTile
  }
}
</script>
<style lang="scss"></style>
