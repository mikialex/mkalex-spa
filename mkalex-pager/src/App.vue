<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <top-nav></top-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import topNav from '@/components/nav/top-nav.vue'
export default {
  name: 'app',
  components: {
      'top-nav':topNav,
  }
}
</script>

<style lang="scss" scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>
