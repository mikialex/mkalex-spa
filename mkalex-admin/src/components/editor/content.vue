<template>
  <div>
   <div class="content-editor" >
      <div  class="content-toolbar">

        <div class="editor-option">
          <div>
            <i class="fa fa-bold" ></i>
          </div>
          <div>
            <i class="fa fa-italic" ></i>
          </div>
          <div>
            <i class="fa fa-list" ></i>
          </div>
          <div>
            <i class="fa fa-moon-o" ></i>
          </div>
        </div>

        <div>
          <span v-if="!isShowPreview" @click="togglePreview">
            <i class="fa fa-eye" ></i>
            </span>
          <span v-if="isShowPreview" @click="togglePreview">
            <i class="fa fa-eye-slash" ></i>
          </span>
        </div>
      </div>
   </div>

   <textarea id="md-content" spellcheck="false" v-model="inputValue" v-if="!isShowPreview"></textarea>
      <div id="md-preview" v-if="isShowPreview" v-html="parsedContent"> </div>
  </div>
</template>

<script>
var marked = require('marked');
import ce from './content-editor.vue'
export default {
  components:{
    'content-editor':ce
  },
  data:function(){
    return {
      isShowPreview: false
    }
  },
  props:{
    content:{required:true},
    urlname:{required:true},
  },
  methods:{
    updateData(value){
      this.$emit('contentUpdate',value);
    },
    togglePreview(){
      this.isShowPreview=!this.isShowPreview;
    }
  }
}
</script>

<style lang="scss" >

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
  background: #fff;
  min-height: 30px;
  max-height: 30px;
  padding: 5px;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  // box-sizing: border-box;
  > * {
    font-size: 20px;
    cursor: pointer;
    margin: 5px;
    &:hover {
      color: #f66;
    }
  }
}

.editor-option{
  font-size: 14px;
  display: flex;
  >div{
    border:1px solid rgba(0,0,0,0.1);
    width:20px;
    height:20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

#md-content {
  flex-grow: 1;
  width: 100%;
  resize: none;
  box-sizing: border-box;
  background: #fffefa;
  color: #333;
  border: 0px;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  outline: none;
  min-height: 300px;
  padding: 20px;

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
  padding: 100px;

  //  margin:200px;
  box-sizing: border-box;
  width: 100%;
  background: #fff;
  overflow: scroll;

  p {
    color: #444;
    line-height: 1.5;
    text-align: justify;
  }
  img {
    max-width: 100%;
    margin: auto;
    text-align: center;
  }
}
</style>

