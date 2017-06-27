<template>
  <div id="app">
    <top-nav></top-nav>
    <page-with-sticky-footer>
          <div style="height:100px"></div>
      <router-view></router-view>
      <footer-dark slot="footer"></footer-dark>
    </page-with-sticky-footer>
  </div>
</template>

<script>
import topNav from '@/components/nav/top-nav.vue'
import footerDark from '@/components/footer/footer-dark.vue'
export default {
  name: 'app',
  components: {
    'top-nav': topNav,
    'footer-dark': footerDark,
  }
}
</script>

<style lang="scss">
html {
  font-family: "PingFang SC", "microsoft yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}

body {
  margin: 0px;
}

@font-face {
  font-family: bigCaslon;
  src: url('./assets/font/BigCaslon.ttf');
  font-weight: normal;
}

::selection {
  color: #FFFFFF;
  background-color: rgb(210, 63, 63);
  border-radius: 10px;
}

::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}

//track
::-webkit-scrollbar-track {
  background-color: #efefef;
  box-shadow: inset 0px -1px 2px 3px rgba(0, 0, 0, 0.1);
}



/* 滚动条的滑轨背景颜色 */

::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 4px 1px 0px rgba(0, 0, 0, 0.1),
  inset 0px 0px 0px 3px rgba(0, 0, 0, 0.1);
}
</style>
