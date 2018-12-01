<template>
  <section >
    <div v-html="parsedContent" class="md-section" 
    :style="{width:this.width}">
      
    </div>
  </section>
</template>

<script>
import "highlight.js/styles/rainbow.css";
var marked = require("marked");
export default {
  props: {
    content: {
      default: "default markdown content"
    },
    renderType: {
      default: "normal"
    },
    urlname: { required: true }
  },
  data() {
    return {
      width: 100
    };
  },
  mounted() {
    this.width = this.$el.clientWidth + "px";
    window.addEventListener("resize", this.onresize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onresize);
  },
  methods: {
    onresize() {
      this.width = this.$el.clientWidth + "px";
    }
  },
  computed: {
    parsedContent() {
      marked.setOptions({
        highlight: function(code) {
          return require("highlight.js").highlightAuto(code).value;
        }
      });
      if (this.renderType === "normal") {
        let urlbase = process.env.STATIC_ROOT + "image/";
        let p = this.content.replace(/{#base#}/g, urlbase);
        return marked(p);
      }
    }
  }
};
</script>

<style lang="scss">

.md-section {
  width: 100%;
  max-width: 100%;
  font-size: 16px;
  color: #555;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #555;
    font-weight: bold;
  }

  p {
    color: #666;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
    margin: auto;
    text-align: center;
  }

  pre {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }

  a {
    text-decoration: underline;
    color: rgb(22, 72, 67);
    &:hover {
      color: rgb(35, 160, 176);
    }
  }
}
</style>
