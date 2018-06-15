<template>
  <div id="app">
    <top-nav></top-nav>
    
    <scroll-to-top></scroll-to-top>

    <page-with-sticky-footer v-if="!useClean">
      <trans-splice>
        <router-view></router-view>
      </trans-splice>
      <footer-dark slot="footer"></footer-dark>
    </page-with-sticky-footer>
  
    <router-view name="clean"></router-view>
  </div>
</template>

<script>
import topNav from "@/components/nav/top-nav.vue";
import footerDark from "@/components/footer/footer-dark.vue";
import scrollToTop from "@/components/scroll-to-top.vue";
export default {
  name: "app",
  computed: {
    useClean() {
      return (
        this.$route.name === "caicai" ||
        this.$route.name === "404" ||
        this.$route.name === "reader"
      );
    }
  },
  methods: {
    changeSize: function(size) {
      document.querySelector("#app").style.fontSize = size + "px";
    },
    setRem: function() {
      let width = document.body.clientWidth;
      if (width <= 400) {
        this.changeSize(12);
      } else if (400 <= width && width <= 600) {
        let ratio = (width - 0.25 * (width - 600)) / 37.5;
        this.changeSize(ratio);
      } else if (width <= 1280) {
        this.changeSize(16);
      } else if (width <= 1920) {
        let ratio = (width - 0.5 * (width - 1280)) / 88;
        this.changeSize(ratio);
      } else {
        this.changeSize(18);
      }
    }
  },
  mounted() {
    window.onresize = function() {
      this.setRem();
    }.bind(this);
    this.setRem();
  },
  components: {
    "top-nav": topNav,
    "footer-dark": footerDark,
    "scroll-to-top": scrollToTop
  }
};
</script>

<style lang="scss">
@import "assets/css/font-awesome.min.css";
@import "./sass/font.scss";
@import "./sass/scroll-bar.scss";

html {
  font-family: "PingFang SC", "microsoft yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  overflow-x: hidden;
}

body {
  margin: 0px;
  background: #fafafa;
}

::selection {
  color: #ffffff;
  background-color: rgb(210, 63, 63);
  border-radius: 10px;
}
</style>
