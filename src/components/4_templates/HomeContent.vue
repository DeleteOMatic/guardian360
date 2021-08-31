<template>
  <section class="section-home">
    <main class="container">
      <FibonacciTile />
    </main>
  </section>
</template>
<script>
import FibonacciTile from '@/components/3_organisms/FIbonacciTile.vue'

export default {
  name: 'HomeContent',
  components: {
    FibonacciTile
  }
}
</script>
<style lang="scss"></style>
