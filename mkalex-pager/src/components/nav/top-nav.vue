<template>
  <div>
    <div style="position:fixed;width:100%">
      <container-mid>
        <nav class="mk-nav-main" :class="{ floatTopNav: !isTop }">
          <mobile-top></mobile-top>
          <ul :style="{ height: mobilePanelHeight + 'rem' }">
            <nav-block v-for="navinfo in navList" 
            :key="navinfo.name" :name="navinfo.name" 
            :isUnderconstruction="navinfo.isUnderconstruction"
            :link="navinfo.link"></nav-block>
          </ul>
          <div>
            <h2 style="display:none">格藝尋道 術設溯淵</h2>
            <div>
              <img src="../../assets/slogon.svg"></img>
            </div>
          </div>
        </nav>
      </container-mid>
    </div>
  </div>
</template>

<script>
import topNavBlock from './top-nav-block.vue'
import mobileTop from './top-nav-mobile-top.vue'
export default {
  components: {
    'nav-block': topNavBlock,
    'mobile-top':mobileTop,
  },
  data(){
    return {
    isTop: true,
    downHeight: 100,
    upHeight: 70,
    navList: [
      { name: 'Home', link: 'home', isUnderconstruction: false, isNewWindow: false },
      { name: 'Article', link: 'article', isUnderconstruction: false, isNewWindow: false },
      { name: 'Portfolio', link: 'portfolio', isUnderconstruction: false, isNewWindow: false },
      { name: 'Collection', link: 'caicai', isUnderconstruction: true, isNewWindow: false },
      { name: 'About', link: 'meta', isUnderconstruction: false, isNewWindow: false },
    ]
    }
  },
  computed: {
    mobilePanelHeight: function () {
      if (this.$store.state.topNavOpen) {
        return 4 * this.navList.length
      } else {
        return 0
      }
    }
  },
  methods: {
    handleScroll() {
      if (document.body.scrollTop > this.downHeight) {
        this.isTop = false
      } else if (document.body.scrollTop < this.upHeight) {
        this.isTop = true
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.mk-nav-main {
  width: 100%;
  height: rem(60px);
  width: 100%;
  transition: 0.8s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px; // padding-bottom: 20px;
  @media (max-width: 700px) {
    padding: 0px;
    margin: 0px;
    display: block;
    height: rem(45px);
  }
  >ul {
    display: flex;
    align-items: center;
    padding-left: 0px;
    margin: 0px;
    transition: 1s cubic-bezier(0, 0, 0.1, 0.93);
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
  >div {
    display: flex;
    padding: 5px;
    >div {
      margin-top: 5px;
      margin-bottom: 15px;
      >img {
        margin: 0px;
        font-size: rem(32px);
        border-bottom: $line-border;
        height: rem(60px);
        line-height: rem(60px);
        text-align: right;
        width: 300px;
        @media (max-width: 900px) {
          width:200px;
          vertical-align: middle;
        }
        @media (max-width:730px) {
          display: none;
        }
      }
      &::after {
        position: relative;
        display: block;
        float: right;
        margin-top: rem(56px);
        content: ' ';
        @extend .mk-small-dot;
        @media (max-width: 700px) {
          display: none;
        }
      }
    }
  }
}

.floatTopNav {
  background: rgba(255, 255, 255, .95);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.09)
}
</style>
