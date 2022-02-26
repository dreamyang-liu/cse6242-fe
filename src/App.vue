<template>
  <div id="app">
    <keep-alive>
    <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>

<script>

import Compare from './view/Compare.vue';
import Main from './view/Main.vue';

export default {
  name: 'App',
  components: {
    Compare,
    Main
  },
  data() {
    return {
      currentPage: 'Main',
    }
  },
  computed: {
    currentTabComponent() {
      return this.currentPage.toLowerCase() === "main" ? Main : Compare;
    }
  }
}
</script>

<style lang="less">
@import "./assets/font.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, lobster;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
