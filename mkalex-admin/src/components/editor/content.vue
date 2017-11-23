<template>
  <div>
    <div class="content-preview" @click="toggleOpen">
      {{content}}
    </div>
    <div class="content-editor" v-if="isOpen">
      <div  class="content-toolbar">
        <i class="fa fa-arrow-circle-left" @click="toggleOpen"></i>
        <i class="fa fa-futbol-o" @click="togglePreview"></i>
      </div>
      <textarea id="md-content" spellcheck="false" v-model="inputValue" v-if="!isShowPreview"></textarea>
      <div id="md-preview" v-if="isShowPreview" v-html="parsedContent"> </div>
    </div>
  </div>
</template>

<script>
var marked = require('marked');
export default {
  name: 'content-editor',
  data:function(){
    return {
      inputValue:'',
      isOpen:false,
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
  watch:{
    content:function (newContent){
      this.inputValue=newContent
    } ,
    inputValue:function(newinput){
      this.$emit('contentUpdate',this.inputValue);
    }
  },
  methods:{
    updateData(){
      this.$emit('contentUpdate',document.getElementById('md-content').innerText);
    },
    toggleOpen(){
      this.isOpen=!this.isOpen;
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
}

.content-toolbar{
  background: #fff;
  height: 30px;
  padding:5px;
  >*{
    font-size:30px;
    cursor: pointer;
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





      // let editor=document.getElementById('md-content')
      // let offset=0;
      // try{
      //   offset=window.getSelection().getRangeAt(0).startOffset;
      // }catch(e){}
      // editor.innerText=newContent;


      // let range=document.createRange();
      // let maxLength=editor.innerText.length;
      // range.setStart(editor.firstChild,Math.min(offset,maxLength));

      // let sel = window.getSelection();
      // sel.removeAllRanges();
      // sel.addRange(range);
</style>

