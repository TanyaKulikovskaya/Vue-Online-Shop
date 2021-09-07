<template>
  <div id="app">
    <div class="wrapper">
      <the-header />
      <div class="content">
        <keep-alive :exclude="['product']">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <the-footer /> 
  </div>
</template>

<script>

import TheHeader from './components/header/the-header.vue';
import TheFooter from './components/footer/the-footer.vue';

export default {
    name: 'App',
    components: {
        TheHeader,
        TheFooter
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
