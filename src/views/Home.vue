<template>
  <section class="home">
    <HomeContent />
  </section>
</template>

<script>
// @ is an alias to /src
import HomeContent from '@/components/4_templates/HomeContent.vue'

export default {
  name: 'home',
  components: {
    HomeContent
  }
}
</script>
