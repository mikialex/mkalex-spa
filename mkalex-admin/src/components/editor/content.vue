<template>
  <div class="content-container">

    <div class="mask" @click="closeAlbum" v-if="showAlbum"></div>
    <!-- <div class="album" :class="{'album-hide':!showAlbum}">
      <album-part  :useforEditor="true" @selectImage="setImage"></album-part>
    </div> -->
    <div v-if="!isActiveContent"  
    @click="startEdit"
    class="content-snap">
      {{content}}
    </div>

  <div class="edit-layer" v-show="isActiveContent">
   <div class="content-editor" >
      <div  class="content-toolbar" >
        <el-button size="small" @click="isActiveContent = false"> close </el-button>
        <div class="preview">
          <el-button size="small" v-if="!isShowPreview" @click="togglePreview">
            <i class="fa fa-eye" ></i> preview
            </el-button>
          <el-button size="small" v-if="isShowPreview" @click="togglePreview">
            <i class="fa fa-eye-slash" ></i> textvalue
          </el-button>
        </div>
      </div>
   </div>

  <div id="mirror-container"  v-show="!isShowPreview">
   <div id="mirror">
     <!-- edit content here -->
   </div>
  </div>


   <div id="md-preview" v-if="isShowPreview" v-html="parsedContent"></div>
  </div>

  </div>
</template>

<script>
const marked = require('marked');
import 'highlight.js/styles/rainbow.css';
import album from '../album/album.vue';
import CodeMirror from 'codemirror/lib/codemirror'   // CodeMirror，必要
import 'codemirror/lib/codemirror.css'    // css，必要
import 'codemirror/theme/base16-light.css'    // css，必要
import 'codemirror/mode/markdown/markdown'  // 语法高亮，自行替换为你需要的语言

var mirrorEditor;

export default {
  components:{
    'album-part': album
  },
  data(){
    return {
      isShowPreview: false,
      hasGetContent: false,
      showAlbum:false,
      isActiveContent: false
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
    content(value){
      if(!this.hasGetContent){
        console.log('set')
        let oldC = mirrorEditor.getCursor();
        mirrorEditor.setValue(value);
        mirrorEditor.setCursor(oldC);
        this.hasGetContent = true;
      }
    }
  },
  methods:{
    togglePreview(){
      this.isShowPreview=!this.isShowPreview;
    },
    startEdit(){
      this.isActiveContent= true;
      mirrorEditor.setSize('100%', window.innerHeight - 60);
      mirrorEditor.focus();
    },
    // setImage(img){
    //   this.showAlbum=false;
    //   let myField = this.$el.querySelector('#md-content');
    //   myField.focus();
    //   myField.selectionStart=this.lastStart;
    //   myField.selectionEnd=this.lastEnd;
    //   this.insertAtCursor('![]('+ '{#base#}'+ img +')','');
    // },
    // insertAtCursor(startStr,endStr) {
    //   if(this.isTyping){
    //     let myField = this.$el.querySelector('#md-content');
    //     var startPos = myField.selectionStart;
    //     var endPos = myField.selectionEnd;
    //     this.content = this.content.substring(0, startPos)
    //         + startStr
    //         + this.content.substring(startPos, endPos)
    //         + endStr
    //         + this.content.substring(endPos, this.content.length);
    //     setTimeout(() => {
    //       myField.focus();
    //       myField.selectionStart=startPos;
    //       myField.selectionEnd=endPos;
    //     }, 0);
    //   }
    // }

  },
  mounted() {
    mirrorEditor = CodeMirror(this.$el.querySelector('#mirror'), {
      value: this.content,
      mode:  "markdown",
      lineWrapping: true,
      lineNumbers: false,
      inputStyle: "contenteditable",
      theme: 'base16-light'
    });
    mirrorEditor.on('change', (instance, change)=>{
      this.content = instance.getValue();
    })
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

.content-toolbar {
  border-top:1px solid rgba(0,0,0,0.1);
  padding: 5px 10px 5px 10px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.not-active{
  color:#bbb;
}

.content-container{
  display: flex;
  flex-direction: column;
}

#md-preview {
  flex-grow: 1;
  box-sizing: border-box;
  width: 80vw;
  height:calc(100vh - 60px);
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

#mirror-container{
  padding:10px;
  height:calc(100vh - 30px);
}

.edit-layer{
  position: fixed;
  width:100vw;
  height:100vh;
  left:0px;
  top:0px;
  background: #fff;
}

.content-snap{
  font-size: 12px;
  min-height: 100px;
  color: #666;
  cursor: pointer;
  &:hover{
    background: #eee;
  }
  &:active{
    background: #ddd;
  }
}
</style>

