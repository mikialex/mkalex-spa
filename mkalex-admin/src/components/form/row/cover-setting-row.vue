<template>
  <div class="cover-row">
    <span class="info">
      <i class="fa fa-hand-point-right" ></i>
      选择封面
    </span>
    <div class="image-shower" :class="{'button-hide':this.coverUrl!==''}">
      <el-button class="select" @click="openAlbum">SELECT COVER</el-button>
      <img :src="realUrl" alt="" v-if="this.coverUrl!==''">
    </div>
    <div class="mask" @click="closeAlbum" v-if="showAlbum"></div>
    <div class="album" :class="{'album-hide':!showAlbum}">
      <album-part :useforCover="true" @selectCoverImage="setImage"></album-part>
    </div>
  </div>
</template>

<script>
import album from "../../album/album.vue";
export default {
  data() {
    return {
      showAlbum: false,
    };
  },
  components: {
    "album-part": album
  },
  methods: {
    changeTab(newTab) {
      this.currentTab = newTab;
    },
    openAlbum() {
      this.showAlbum = true;
    },
    closeAlbum() {
      this.showAlbum = false;
    },
    setImage(img) {
      this.showAlbum = false;
      this.coverUrl=img;
    },
  },
  computed: {
    realUrl(){
      return process.env.STATIC_ROOT + 'image/'+ this.coverUrl.split('.')[0] + '_overview.jpg';
    },
    coverUrl: {
      get() {
        return this.$store.state.editor.coverUrl;
      },
      set(val) {
        this.$store.commit("editor/setCoverUrl", val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cover-row{
  padding:5px;
  display: flex;
  justify-content: space-between;
  >.info{
    margin-left:5px;
    margin-top:5px;
  }
}

.button-hide{
  >.select{
    opacity: 0;
  }
  &:hover{
    >.select{
      opacity: 1;
    }
  }
}

.image-shower{
  width:240px;
  height:130px;
  border:1px solid #eee;
  border-radius: 3px;
  padding:5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  >img{
    width:100%;
    height:100%;
  }
  >.select{
    position: absolute;
    top:50px;
    left:50px;
  }
}


.album {
  width: 90vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  top: 0px;
  left: 0px;
  background: #fff;
  box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  box-sizing: border-box;
  transition: 300ms ease-in-out;
}
.mask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
  }
.album-hide {
  left: -90vw;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
}
</style>

