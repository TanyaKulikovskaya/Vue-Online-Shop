<template>
  <div id="app">
    <div class="wrapper">
      <the-header />
      <div class="content">
        <keep-alive :exclude="['product']">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
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

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

.fade {
    &-enter-active,
    &-leave-active {
      transition: all .5s ease;
    }
    &-enter-from,
    &-leave-to {
      opacity: 0;
      transform: scale(0.9);
    }
}
</style>
