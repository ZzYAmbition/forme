<template>
  <div id="app">
    <nav_bar></nav_bar>
    <router-view></router-view>
  </div>
</template>

<script>
import nav_bar from "./components/nav_bar.vue";
export default {
  components: {
    nav_bar,
  },
};
</script>
<style lang="less">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
}
</style>
