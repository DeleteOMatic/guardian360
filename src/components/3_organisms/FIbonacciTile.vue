<template>
  <section>
    <div v-html="info"></div>
    <div v-html="tiles"></div>
  </section>
</template>
<script>
export default {
  name: 'FibonacciTile',
  components: {
  },
  data () {
    return {
      info: 'init',
      tiles: ''
    }
  },
  methods: {
    // start
    generateNumbers: function () {
      console.log('generateNumbers')
      let f0 = 0
      let f1 = 1
      let fibo = 0
      this.info = ''
      for (let i = 0; i < 10; i++) {
        this.info = this.info + ' ' + fibo
        f0 = f1
        f1 = fibo
        fibo = f1 + f0
      }
    },
    generateTiles: function () {
      this.tiles = '<div>tile</div>'
    }
    // end
  },
  mounted () {
    this.generateNumbers()
    this.generateTiles()
  }
}
</script>
