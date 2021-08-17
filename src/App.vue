<template>
  <div id="app">
    <Header id="header" />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/layout/Header.vue'

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
  }

  #header {
    padding: 10px 20px 10px 20px;
    border-radius: 0 0 12px 12px;
  }

  #content {
    padding-top: 10px;
  }
</style>
