<template>
  <section class="section-guardian">
    <h3>{{ title }}</h3>
    <div v-html="tiles" class="tiles" ></div>
  </section>
</template>
<script>
export default {
  name: 'FibonacciTile',
  components: {
  },
  data () {
    return {
      title: 'Guardian360 - Assesment',
      tiles: ''
    }
  },
  methods: {
    // createTile
    createTile: function (name, fibo) {
      let tile = '<div class="tile ' + name + '" onClick="this.classList.toggle(&quot;active&quot;);"><div>' + fibo + '</div></div>'

      return tile
    },
    // generateTiles
    generateTiles: function () {
      console.log('generateTiles')
      this.tiles = ''
      let divName = ''
      let f0 = 0
      let f1 = 1
      let fibo = 0

      for (let i = 0; i < 6; i++) {
        f0 = f1
        f1 = fibo
        fibo = f1 + f0
        divName = 'tile-' + fibo
        this.tiles = this.tiles + ' ' + this.createTile(divName, fibo)
      }
    }
  },
  beforeMount () {
    this.generateTiles()
  }
}
</script>
<style lang="scss" scoped>
.section-guardian{
  margin-top:10%;

  .tiles {
  display: grid;
  grid-gap: 0px;
  grid-template-rows: 4fr 2fr 2fr 8fr;
  grid-template-columns: 4fr 2fr 2fr 12fr;
  height: 300px;
  width: 500px;
  margin: 0 auto;

  ::v-deep .tile{
    display: grid;
    cursor: pointer;
    align-items: center;
    justify-items: center;

    div{
      display:none;
      width:10px;
      height:10px;
      margin-top:-10px;
      font-size: 1rem;
    }

    &:active div,
    &:hover div,
    &.active div{
      display: block;
      color:white;
      font-weight: bold;
    }

  }

  ::v-deep .tile-1{
    background-color:#669900;
    grid-row: 2 / 3;
    grid-column: 2 / 2;

    &:nth-child(2){
      background-color:#cb0202;
      grid-row: 2 / 3;
      grid-column: 3 / 3;
    }
  }

  ::v-deep .tile-2{
      background-color:#ffcc00;
      grid-row: 1 / 2;
      grid-column: 2 / 4;
    }

  ::v-deep .tile-3{
      background-color:#ff6600;
      grid-row: 1 / 3;
      grid-column: 1 / 2;
    }

  ::v-deep .tile-5{
      background-color:#3332cb;
      grid-row: 3 / 6;
      grid-column: 1 / 4;
    }

  ::v-deep .tile-8{
      background-color:#660066;
      grid-row: 1 / 6;
      grid-column: 4 / 4;
    }

  }
}
</style>
