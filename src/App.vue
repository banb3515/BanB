<template>
  <div id="app">
    <div v-show="!$isMobile()" class="empty dark-gradient-background"><wbr></div>

    <div id="container" class="dark-gradient-background" :class="{ 'pc-container': !$isMobile() }">
      <!-- Header -->
      <Header id="header" />

      <!-- View Content -->
      <router-view id="content"></router-view>
    </div>

    <div v-show="!$isMobile()" class="empty dark-gradient-background"><wbr></div>
  </div>
</template>

<script>
  // Layout
  import Header from './components/layout/Header.vue'

  // JavaScript
  import './js/mode' // Mode

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>
  /* Main Style */
  @import url("css/style.css");

  /* Google Web Font */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap');
</style>
