<template>
   <div class="content-editor" >
      <div  class="content-toolbar">
        <i class="fa fa-arrow-circle-left" @click="toggleOpen"></i>
        <span v-if="!isShowPreview" @click="togglePreview">预览</span>
        <span v-if="isShowPreview" @click="togglePreview">关闭预览</span>
      </div>
      <textarea id="md-content" spellcheck="false" v-model="inputValue" v-if="!isShowPreview"></textarea>
      <div id="md-preview" v-if="isShowPreview" v-html="parsedContent"> </div>
    </div>
</template>

<script>
var marked = require('marked');
export default {
  name: 'content-editor',
  data:function(){
    return {
      inputValue:'',
      isShowPreview:false,
    }
  },
  props:{
    content:{required:true},
    urlname:{required:true},
  },
  computed:{
    parsedContent(){
      let urlbase=process.env.STATIC_ROOT+'image/content/'+this.urlname+'/'
      let p=this.content.replace(/{#base#}/g,urlbase)
      return marked(p)
    }
  },
  mounted(){
      this.inputValue=this.content
  },
  watch:{
    content:function (newContent){
      this.inputValue=newContent
    } ,
    inputValue:function(newinput){
      this.$emit('contentUpdate',this.inputValue);
    }
  },
  methods:{
    toggleOpen(){
      this.$emit('closeEditor');
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
  &:hover{
    background: #eee;
  }
}


.content-editor{
  width:100vw;
  height: 100vh;
  position: fixed;
  top:0px;
  left:0px;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background-color: #afafaf;
  box-shadow: inset 0px -1px 0px 3px rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 4px 1px 0px rgba(0, 0, 0, 0.1),
  inset 0px 0px 0px 2px rgba(0, 0, 0, 0.1);
}
}

.content-toolbar{
  background: #fff;
  min-height: 30px;
  max-height: 30px;
  padding:5px;
  display: flex;
  align-items: center;
  border-bottom:1px solid rgba(0, 0, 0, 0.1);
  // box-sizing: border-box;
  >*{
    font-size:20px;
    cursor: pointer;
    margin:5px;
    &:hover{
      color:#f66;
    }
  }
}

 #md-content{
   flex-grow: 1;
    width:100%;
    resize: none;
    box-sizing: border-box;
    background: #fffefa;
    color:#333;
    border:0px;
    border-top:solid 1px rgba(0,0,0,0.1);
    border-bottom:solid 1px rgba(0,0,0,0.1);
    font-size: 14px;
    outline: none;
    min-height:300px;
    padding: 20px;
    line-height: 1.5;
    word-spacing: 5px;
    letter-spacing: 1px;
  }

  #md-preview{
   flex-grow: 1;
   padding:100px;

  //  margin:200px;
    box-sizing: border-box;
    width:100%;
    background: #fff;
    overflow: scroll;


     p{
    color:#444;
    line-height: 1.5;
    text-align: justify;
  }
   img{
    max-width: 100%;
    margin:auto;
    text-align: center;
  }  
  }
</style>

