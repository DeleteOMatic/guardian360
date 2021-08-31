<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
    <a class="navbar-brand" href="#"></a>
    <button
      class="navbar-toggler"
      type="button"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navigation'
}
</script>
<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }

  }
  .nav-item{
    padding-right:10px;
  }
}
</style>
