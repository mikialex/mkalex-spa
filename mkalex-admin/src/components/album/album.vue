<template>
  <div>
    <div class="upload-bar">
      <input type="file" class="file" style="display:none" @change="upload">
      <el-button @click="prepare" :disabled="isUploading" size="small">UPLOAD</el-button>
      <el-progress
        class="upload-progress"
        v-if="isUploading"
        :text-inside="true"
        :stroke-width="18"
        :percentage="ratio"
      ></el-progress>

      <div style="width: 200px; margin: 5px">
        <el-input placeholder="filter" v-model="filterWord" size="small" clearable></el-input>
      </div>
    </div>
    <div :class="{'scroll-container': fixheight}">
      <album-block
        v-for="image in currentImageList"
        :image="image"
        :canSetCover="useforCover"
        :key="image.id"
        @selectCoverImage="setCoverImage"
      ></album-block>

      <mk-pager
        :list="imageList"
        :currentIndex="currentPage"
        :eachPage="eachPageNumber"
        @switchPage="switchPage"
      ></mk-pager>
    </div>
    <div class="big-view" v-if="bigView" @click="closeBig">
      <img :src="BigUrl" alt>
    </div>
  </div>
</template>

<script>
import block from "./album-block";
export default {
  components: {
    "album-block": block
  },
  data() {
    return {
      bigView: false,
      BigUrl: "",
      isUploading: false,
      ratio: 0,

      currentPage: 0,
      eachPageNumber: 8,

      filterWord: ""
    };
  },
  computed: {
    imageList() {
      return this.$store.state.image.imageList.filter(image => {
        return image.name.indexOf(this.filterWord) !== -1;
      });
    },
    currentImageList() {
      const current = this.currentPage;
      const from = current * this.eachPageNumber;
      const to = (current + 1) * this.eachPageNumber;
      return this.imageList.slice(from, to);
    }
  },
  props: ["useforCover", "fixheight"],
  methods: {
    switchPage(page) {
      this.currentPage = page;
    },
    prepare() {
      this.$el.querySelector("input").click();
    },
    async upload() {
      if (this.$el.querySelector(".file").files[0]) {
        this.isUploading = true;
        await this.$store.dispatch("image/uploadImage", {
          file: this.$el.querySelector(".file").files[0],
          name: "testfile",
          progressCallBack: this.progress
        });
        this.isUploading = false;
      }
    },
    progress(e) {
      this.ratio = Math.ceil(e.loaded / e.total);
    },
    viewBig(url) {
      this.bigView = true;
      this.BigUrl = process.env.STATIC_ROOT + "image/" + url;
    },
    closeBig() {
      this.bigView = false;
      this.BigUrl = "";
    },
    setImage(img) {
      this.$emit("selectImage", img);
    },
    setCoverImage(img) {
      this.$emit("selectCoverImage", img);
    },
    preventScroll(e) {
      // console.log(e.target);
      // e.preventDefault();
    }
  },
  mounted() {
    this.$store.dispatch("image/getImageList");
    if (this.useforCover) {
      document.body.addEventListener("mousewheel", this.preventScroll);
    }
  },
  destroy() {}
};
</script>


<style lang="scss" scoped>
.upload-bar {
  display: flex;
  align-items: center;
  padding: 5px;
  > .upload-progress {
    width: 200px;
    margin: 15px;
  }
}

.scroll-container {
  overflow-y: scroll;
  height: calc(100vh - 150px);
  overscroll-behavior: contain;
}

.big-view {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    max-width: 100vw;
    max-height: 100vh;
  }
}
</style>

