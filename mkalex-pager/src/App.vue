<template>
  <div id="app">
    <top-nav></top-nav>
    <page-with-sticky-footer v-if="!useClean">
      <div style="height:100px"></div>
      <router-view></router-view>
      <footer-dark slot="footer"></footer-dark>
    </page-with-sticky-footer>
  
    <router-view name="clean"></router-view>
  </div>
</template>

<script>
import topNav from '@/components/nav/top-nav.vue'
import footerDark from '@/components/footer/footer-dark.vue'
export default {
  name: 'app',
  computed: {
    useClean() {
      return this.$route.name === "caicai"
    }
  },
  methods: {
    changeSize:function(size){
      document.querySelector('html').style.fontSize=size+'px';
    },
    setRem: function(){
      let width = document.body.clientWidth;
      if (width <= 400) {
        this.changeSize(12);
      } else if (400 <= width && width <= 600) {
        let ratio = (width - 0.25 * (width - 600)) / 37.5;
        this.changeSize(ratio);
      } else if (width <= 1280) {
        this.changeSize(16);
      } else if (width <= 1920) {
        let ratio = (width - 0.5 * (width - 1280)) / 88
        this.changeSize(ratio);
      } else {
        this.changeSize(18);
      }
    },
  },
  mounted(){
    window.onresize =(function() {
        this.setRem();
    }).bind(this);
    this.setRem();
  },
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
  background: #fafafa;
}

@font-face {
  font-family: bigCaslon;
  src: url('./assets/font/BigCaslon.ttf');
  font-weight: normal;
}
@font-face {
  font-family: JosefinSans;
  src: url('./assets/font/JosefinSans-SemiBold.ttf');
  font-weight: semibold;
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
