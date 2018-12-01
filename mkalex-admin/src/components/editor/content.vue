<template>
  <div class="content-container">
    <div class="mask" @click="showAlbum = false" v-if="showAlbum"></div>

    <div class="album" :class="{'album-hide':!showAlbum}">
      <album-part :fixheight="true"></album-part>
    </div>

    <div class="content-toolbar">
      <el-button size="small" @click="showAlbum = true">album</el-button>
      <div class="preview">
        <el-button size="small" v-if="!isShowPreview" @click="togglePreview">
          <i class="fa fa-eye"></i> preview
        </el-button>
        <el-button size="small" v-if="isShowPreview" @click="togglePreview">
          <i class="fa fa-eye-slash"></i> edit
        </el-button>
      </div>
    </div>

    <mdRenderer
      :content="parsedContent"
      :urlname="this.$store.state.editor.urlnam"
      v-if="isShowPreview"
    />
    <mirrorCom v-show="!isShowPreview" :content="content" @change="contentChange"/>
  </div>
</template>

<script>
const marked = require("marked");
import "highlight.js/styles/rainbow.css";
import album from "../album/album.vue";

import mirrorCom from "./code-mirror";
import mdRenderer from "../../../../mkalex-site/src/components/markdown-render";

export default {
  components: {
    "album-part": album,
    mdRenderer,
    mirrorCom
  },
  data() {
    return {
      isShowPreview: true,
      showAlbum: false,
      isActiveContent: false
    };
  },
  computed: {
    parsedContent() {
      marked.setOptions({
        highlight: function(code) {
          return require("highlight.js").highlightAuto(code).value;
        }
      });
      let urlbase = process.env.STATIC_ROOT + "image/";
      // process.env.STATIC_ROOT + "image/content/" + this.$store.state.editor.urlname + "/";
      let p = this.content.replace(/{#base#}/g, urlbase);
      return marked(p);
    },
    content: {
      get() {
        return this.$store.state.editor.content;
      },
      set(value) {
        this.$store.commit("editor/setContent", value);
      }
    }
  },
  methods: {
    togglePreview() {
      this.isShowPreview = !this.isShowPreview;
    },
    startEdit() {
      this.isActiveContent = true;
      mirrorEditor.setSize("100%", window.innerHeight - 60);
      mirrorEditor.focus();
    },
    contentChange(value) {
      this.content = value;
    }
  }
};
</script>

<style lang="scss" scoped >
.album {
  width: 90vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background: #fff;
  box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  box-sizing: border-box;
  transition: 300ms ease-in-out;
  z-index: 10000;
}
.mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999;
}
.album-hide {
  left: -90vw;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
}

.content-preview {
  font-size: 12px;
  padding: 10px;
  margin: 10px;
  border: 1px dotted rgba(0, 0, 0, 0.1);
  opacity: 0.5;
  cursor: pointer;
  min-height: 300px;
  text-align: justify;
  &:hover {
    background: #eee;
  }
}

.content-toolbar {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 5px 10px 5px 10px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.not-active {
  color: #bbb;
}
</style>

