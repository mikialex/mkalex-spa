<template>
  <div style="width:100%;position:fixed;">
    <div class="mk-container" style="margin:auto">
      <nav class="mk-nav-main">
        <section>
          <!--<embed src="{{ static('/image/commen/logo.svg') }}" class="nav-min-logo">
            <embed src="{{ static('/image/commen/slogon.svg') }}" class="nav-min-slogon">-->
          <div class="nav-toggle" @click="toggleTopNav()" >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a class="outer-link" target="view_window">Cheet-sheet</a>
          </li>
          <li>
            <a class="under-construction">Collection</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
        <div>
          <h2 style="display:none">格藝尋道 術設溯淵</h2>
          <div>
            <!--<embed src="{{ static('/image/commen/slogon.svg') }}">-->
          </div>
        </div>
        <!--<script type="text/javascript">
          $(".nav-toggle").on("click", function() {
            var height = $(".mk-nav-main>ul").css("height");
            if (height !== "0px") {
              $(".mk-nav-main>ul").css("height", "0px");
            } else {
              $(".mk-nav-main>ul").css("height", "360px");
            }
            // $(".mk-nav-main>ul").css("height","300px")
          })
          </script>-->
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTop: true,
      downHeight: 100,
      upHeight: 70,
      navList: [
        { name: 'Home', link: 'sss', isUnderconstruction: false, isNewWindow: false },
        { name: 'Home', link: 'sss', isUnderconstruction: false, isNewWindow: false },
        { name: 'Home', link: 'sss', isUnderconstruction: false, isNewWindow: false },
        { name: 'Home', link: 'sss', isUnderconstruction: false, isNewWindow: false },
      ]
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
    toggleTopNav(){

    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destoryed(){
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss">
$line: #e8e8e8;
$line-dark: #cdcdcd;
$line-light: #f1f0f0;
$line-border: solid 1px $line;
$line-border-dark: solid 1px $line-dark;
$line-border-light: solid 1px $line-light;
$page-background: #fafafa;

.mk-small-dot {
  width: rem(7px);
  height: rem(7px);
  border-radius: 20px;
  background-color: $line;
}

.mk-small-dot-tail {
  &::after {
    position: relative;
    display: block;
    float: right;
    content: ' ';
    @extend .mk-small-dot;
  }
}

.mk-nav-main {
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
    >li {
      display: flex;
      align-items: center;
      height: rem(60px); // background-color: #777;
      list-style: none;
      @media (max-width: 700px) {
        // width:100%;
      }
      &:first-child {
        >a {
          border-left: 0px;
        }
      }
      >a {
        padding-left: rem(15px);
        padding-right: rem(15px);
        text-decoration: none;
        height: rem(45px);
        width: 100%;
        line-height: rem(45px);
        border-left: $line-border;
        font-weight: 300;
        color: #303030;
        transition: 0.3s ease-in;
        &:hover {
          background-color: #2d2d2d;
          color: #fff;
        }
      }
      >.under-construction {
        color: rgb(182, 182, 182) !important;
      }
      >.outer-link {
        &::after {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 10px 10px 0;
          border-color: transparent #b0b0b0 transparent transparent;
          display: block;
          float: right;
          content: ' ';
          position: relative;
          left: rem(15px);
        }
      }
    }
  }
  >div {
    display: flex;
    padding: 5px;
    >div {
      margin-top: 5px;
      margin-bottom: 15px;
      >embed {
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
        @media (max-width:800px) {
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

  >section {
    display: none;
    width: 100%;
    border-bottom: solid 2px rgb(235, 235, 235);

    @media (max-width: 700px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: rem(45px);
    }
    >.nav-min-logo {
      width: 30px;
      margin-left: rem(5px);
    }
    >.nav-min-slogon {
      width: 150px;
    }
    >div {
      width: 30px;
      height: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-around; // border: 1px solid rgb(83, 83, 83);
      >div {
        background-color: rgb(108, 108, 108);
        height: 3px;
        width: 25px; // border-radius: 5px;
      }
    }
  }
}
</style>
