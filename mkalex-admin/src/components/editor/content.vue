<template>
  <div class="content-container">

    <div class="mask" @click="closeAlbum" v-if="showAlbum"></div>
    <div class="album" :class="{'album-hide':!showAlbum}">
      <album-part  :useforEditor="true" @selectImage="setImage"></album-part>
    </div>

   <div class="content-editor" >
      <div  class="content-toolbar" :class="{'toolbar-fix':fixBar}">

        <div class="editor-option" :class="{'not-active': !isTyping}">
          <div @mousedown="insertAtCursor('**','**')">
            <i class="fa fa-bold" ></i>
          </div>
          <div @mousedown="insertAtCursor('*','*')">
            <i class="fa fa-italic" ></i>
          </div>
          <div @mousedown="insertAtCursor('\n```\n\n```','')">
            <i class="fa fa-code" ></i>
          </div>
          <div @mousedown="insertAtCursor('[]()','')">
            <i class="fa fa-link" ></i>
          </div>
          <div @mousedown="openAlbum">
            <i class="fa fa-image" ></i>
          </div>
          <div @mousedown="insertAtCursor('\n+ \n+ \n+ ','')">
            <i class="fa fa-list-ol" ></i>
          </div>
          <div @mousedown="insertAtCursor('\n1. \n2. \n3. ','')">
            <i class="fa fa-list-ul" ></i>
          </div>
          <div @mousedown="insertAtCursor('---','')">
            <i class="fa fa-minus" ></i>
          </div>
          <div @mousedown="insertAtCursor('\n# ','')">
            <i class="fa fa-heading" ></i>1
          </div>
          <div @mousedown="insertAtCursor('\n## ','')">
            <i class="fa fa-heading" ></i>2
          </div>
          <div @mousedown="insertAtCursor('\n### ','')">
            <i class="fa fa-heading" ></i>3
          </div>
          <div @mousedown="insertAtCursor('\n#### ','')">
            <i class="fa fa-heading" ></i>4
          </div>
          <div @mousedown="insertAtCursor('> ','')">
            <i class="fa fa-indent" ></i>
          </div>
        </div>

        <div class="preview">
          <span v-if="!isShowPreview" @click="togglePreview">
            <i class="fa fa-eye" ></i> preview
            </span>
          <span v-if="isShowPreview" @click="togglePreview">
            <i class="fa fa-eye-slash" ></i> textvalue
          </span>
        </div>
      </div>
   </div>


   <textarea id="md-content" 
   spellcheck="false" 
   v-model="content" 
   v-if="!isShowPreview"
   @keyup="autoHeight"
   @click="autoHeight"
   @focus="focus"
   @blur="blur"
   :style="{'height':this.height+'px'}"
   ></textarea>

   <div id="md-preview" v-if="isShowPreview" v-html="parsedContent"></div>
  </div>
</template>

<script>
var marked = require('marked');
import 'highlight.js/styles/rainbow.css';
import album from '../album/album.vue'
export default {
  components:{
    'album-part': album
  },
  data(){
    return {
      isShowPreview: false,
      currentScroll: 0,
      isTyping: false,
      height: 500,
      showAlbum:false,

      lastStart:0,
      lastEnd:0,
    }
  },
  computed: {
    parsedContent() {
      marked.setOptions({
        highlight: function (code) {
          return require('highlight.js').highlightAuto(code).value;
        }
      });
      let urlbase =
        process.env.STATIC_ROOT + "image/" ;
      
        // process.env.STATIC_ROOT + "image/content/" + this.$store.state.editor.urlname + "/";
      let p = this.content.replace(/{#base#}/g, urlbase);
      return marked(p);
    },
    fixBar(){
      return this.currentScroll>200;
    },
    content:{
      get(){
        return this.$store.state.editor.content;
      },
      set(value){
        this.$store.commit('editor/setContent',value);
      }
    }
  },
  watch:{
    content(){
      let element = this.$el.querySelector('#md-content');
      this.height = element.scrollHeight;
      this.lastStart= element.selectionStart;
      this.lastEnd=element.selectionEnd;
    }
  },
  methods:{
    togglePreview(){
      this.isShowPreview=!this.isShowPreview;
    },
    openAlbum(){
      this.showAlbum=true;
    },
    closeAlbum(){
      this.showAlbum=false;
    },
    setImage(img){
      this.showAlbum=false;
      let myField = this.$el.querySelector('#md-content');
      myField.focus();
      myField.selectionStart=this.lastStart;
      myField.selectionEnd=this.lastEnd;
      this.insertAtCursor('![]('+ '{#base#}'+ img +')','');
    },
    autoHeight(e){
      let element=e.target;
      this.height = element.scrollHeight;
    },
    handleScroll() {
      this.currentScroll = window.pageYOffset;
    },
    focus(){
      this.isTyping=true;
    },
    blur(){
      this.isTyping= false;
    },
    insertAtCursor(startStr,endStr) {
      if(this.isTyping){
        let myField = this.$el.querySelector('#md-content');
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        this.content = this.content.substring(0, startPos)
            + startStr
            + this.content.substring(startPos, endPos)
            + endStr
            + this.content.substring(endPos, this.content.length);
        setTimeout(() => {
          myField.focus();
          myField.selectionStart=startPos;
          myField.selectionEnd=endPos;
        }, 0);
      }
    }

  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    const event = new Event('scroll');
    window.dispatchEvent(event);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="scss" scoped >

.album{
  width:90vw;
  height:100vh;
  position:fixed;
  top:0px;
  left:0px;
  background: #fff;
  box-shadow:10px 0px 20px rgba(0,0,0,0.2);
  padding:20px;
  box-sizing: border-box;
  transition: 300ms ease-in-out;
  z-index: 1000;
}
.mask{
    width:100vw;
    height:100vh;
    position:fixed;
    top:0px;
    left:0px;
  }
.album-hide{
  left:-90vw;
  box-shadow:0px 0px 0px rgba(0,0,0,0.2);
}

.content-preview{
  font-size: 12px;
  padding:10px;
  margin:10px;
  border: 1px dotted rgba(0,0,0,0.1);
  opacity: 0.5;
  cursor: pointer;
  min-height:300px;
  text-align: justify;
  &:hover{
    background: #eee;
  }
}

.toolbar-fix{
  position:fixed;
  top:50px;
  left:0px;
  width:100%;
  box-sizing: border-box;
  padding-left:20px;
  padding-right:20px;
  background: rgba(255, 255, 255, 0.95) !important;
}
.content-toolbar {
  border-top:1px solid rgba(0,0,0,0.1);
  padding-bottom:5px;
  padding-top:5px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // > * {
  //   font-size: 20px;
  //   cursor: pointer;
  //   margin: 5px;
  //   &:hover {
  //     color: #f66;
  //   }
  // }
}

.not-active{
  color:#bbb;
}

.editor-option{
  font-size: 14px;
  display: flex;
  >div{
    cursor: pointer;
    border:1px solid rgba(0,0,0,0.1);
    border-radius:3px;
    width:25px;
    height:25px;
    margin:2px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
      background: #eee;
    }
    &:active{
      background: #ddd;
    }
  }
}

.preview{
  border:1px solid rgba(0,0,0,0.1);
  border-radius:3px;
  padding:3px;
  &:hover{
    background: #eee;
  }
  &:active{
    background: #ddd;
  }
}

.content-container{
  display: flex;
  flex-direction: column;
}

#md-content {
  width: calc(80vw + 60px);
  height:50px;
  align-self: center;
  @media(max-width: 500px) {
    padding: 5px;
    width:95%;
  }
  resize: none;
  box-sizing: border-box;
  background: #fffefa;

  border: 0px;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);

  outline: none;
  min-height: 300px;
  padding: 10px;

  color: #333;
  font-size: 14px;
  line-height: 1.5;
  word-spacing: 5px;
  letter-spacing: 1px;
  font-family: 'Inziu Iosevka SC';

  @media(max-width: 500px) {
    padding: 20px;
  }
}

#md-preview {
  flex-grow: 1;
  box-sizing: border-box;
  width: 80vw;
  margin:auto;
  background: #fff;
  overflow: scroll;

  /deep/ p {
    color: #444;
    line-height: 1.5;
    text-align: justify;
  }
  /deep/ img {
    max-width: 100%;
    margin: auto;
    text-align: center;
  }
}
</style>

