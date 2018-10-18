<template>
  <div class="archive-block">
    <div class="title-section">
      <div class="enter-wrap" @click="gotoReader">
        <span class="main-t">{{articleInfo.title}}</span>
        <h3>{{articleInfo.sub_title}}</h3>
      </div>
      <archive-info :articleInfo="articleInfo"></archive-info>
    </div>
    <img src="../../../assets/defaultBlogCover.png" class="inv-7" v-if="!articleInfo.has_cover">
    <img :src="imgsrc"  v-if="articleInfo.has_cover"  class="inv-7">
  </div>
</template>

<script>
import archiveInfo from "./archive-info";
export default {
  components: {
    "archive-info": archiveInfo
  },
  props: {
    articleInfo: { required: true }
  },
  computed: {
    imgsrc() {
      return process.env.STATIC_ROOT + "image/" + this.articleInfo.cover_url;
    }
  },
  methods: {
    gotoReader() {
      this.$router.push({
        name: "reader",
        params: { type: "article", u_name: this.articleInfo.urlname }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~globalSass";

.archive-block {
  @include ui-card;
  transition: all 1s;
  width: 100%; 
  height:180px;
  margin-bottom: 15px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: futura;
  > img {
    min-width: 300px;
    height: 160px;
    border-radius: 5px;
    margin-left: 20px;
  }
}

.a-b-archive-block {
  margin-left: -20px;
  margin-right: 10px;
}

.title-section {
  height: 100%;
  display: flex;
  height: 160px;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  > .enter-wrap {
    height: 100px;
    cursor: pointer;
    border-radius: 3px;
    transition: 0.5s ease-out;
    &:hover {
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
      > .main-t {
        background-image: linear-gradient(#fff 50%, #333 50%);
        color: #000;
        text-shadow: textoutline(1px, #fff);
        // -webkit-text-stroke: 2px black;
      }
      > h3 {
        color: #000;
      }
    }
    &:active {
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0);
      background: #ddd;
    }
    > .main-t {
      transition: 0.5s ease-out;
      margin: 5px;
      margin-bottom: 0px;

      font-size: 24px;
      font-weight: light;

      background-position: 0 0.8em;
      background-repeat: repeat-x;
      background-size: 2px 10px;
    }

    > h3 {
      transition: 0.5s ease-out;
      margin: 5px;
      font-size: rem(14px);
      font-weight: 500;
      color: #777;
      background-position: 0 1.375rem;
      background-size: 1px 1px;
    }
  }
}
</style>
