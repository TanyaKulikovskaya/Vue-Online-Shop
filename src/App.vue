<template>
  <div id="app">
    <div class="wrapper">
      <the-header />
        <keep-alive :exclude="['vProduct']">
          <router-view></router-view>
        </keep-alive>
      </div>
  </div>
</template>

<script>

import TheHeader from './components/header/TheHeader.vue'

export default {
    name: 'App',
    components: {
        TheHeader
    }
}
</script>

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
