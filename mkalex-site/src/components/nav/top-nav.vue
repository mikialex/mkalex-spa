<template>
  <div>
    <div class="nav-root">
      <container-mid>
        <nav class="mk-nav-main" :class="{ floatTopNav: !isTop }">
          <mobile-top></mobile-top>
          <div class="musk" @click="close" v-if="this.$store.state.topNavOpen"></div>
          <ul :style="{ height: mobilePanelHeight + 'rem' }">
            <nav-block v-for="navinfo in navList" 
            :key="navinfo.name" :name="navinfo.name" 
            :isUnderconstruction="navinfo.isUnderconstruction"
            :love="navinfo.love"
            :link="navinfo.link"
            :outerLink="navinfo.outerLink"></nav-block>
          </ul>
          <div>
            <img src="../../assets/slogon.svg">
          </div>
        </nav>
      </container-mid>
    </div>
  </div>
</template>

<script>
import topNavBlock from "./top-nav-block.vue";
import mobileTop from "./top-nav-mobile-top.vue";
export default {
  components: {
    "nav-block": topNavBlock,
    "mobile-top": mobileTop
  },
  data() {
    return {
      isTop: true,
      downHeight: 100,
      upHeight: 70,
      navList: [
        {
          name: "Home",
          link: "home",
          isUnderconstruction: false,
          isNewWindow: false,
          outerLink: false
        },
        {
          name: "Article",
          link: "article",
          isUnderconstruction: false,
          isNewWindow: false,
          outerLink: false
        },
        {
          name: "Portfolio",
          link: "portfolio",
          isUnderconstruction: false,
          isNewWindow: false,
          outerLink: false
        },
        {
          name: "Project",
          link: "https://github.com/mikialex",
          isUnderconstruction: true,
          isNewWindow: false,
          outerLink: true
        },
        // {
        //   name: " ",
        //   link: "caicai",
        //   isUnderconstruction: false,
        //   isNewWindow: false,
        //   love: true,
        //   outerLink: false
        // }
      ]
    };
  },
  computed: {
    mobilePanelHeight: function() {
      if (this.$store.state.topNavOpen) {
        return 4 * this.navList.length;
      } else {
        return 0;
      }
    }
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > this.downHeight) {
        this.isTop = false;
      } else if (window.pageYOffset < this.upHeight) {
        this.isTop = true;
      }
    },
    close(){
      this.$store.commit('toggleTopNav');
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import "~globalSass";

.nav-root{
  position:fixed;
  width:100%;
  z-index:999;
}

.musk{
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.1);
  position: absolute;
}

.mk-nav-main {
  width: 100%;
  height: 60px;
  width: 100%;
  transition: 0.8s ease-in-out;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px; // padding-bottom: 20px;
  @media (max-width: 700px) {
    padding: 0px;
    margin: 0px;
    display: block;
  }
  > ul {
    display: flex;
    align-items: center;
    padding-left: 0px;
    margin: 0px;
    transition: 0.5s cubic-bezier(0, 0, 0.1, 0.93);
    font-family: "futura";
    @media (max-width: 700px) {
      position: relative;
      left: 0px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.16);
      background-color: rgba(#ffffff, 0.94); // flex-direction: column;
      display: block;
      overflow: hidden;
      width: 100%;
      height: 0px;
      z-index: 999;
    }
  }
  > div {
    display: flex;
    padding: 5px;
    > img {
      margin-right: 5px;
      font-size: rem(32px);
      border-bottom: $line-border;
      height: rem(25px);
      text-align: right;
      padding-bottom: 5px;
      width: 200px;
      @media (max-width: 760px) {
        display: none;
      }
    }
  }
}

.floatTopNav {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.09);
}
</style>
