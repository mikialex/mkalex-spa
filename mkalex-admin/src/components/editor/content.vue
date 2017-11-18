<template>
  <div  id="md-content" spellcheck="false" contenteditable="true" @input="updateData"></div>
</template>

<script>
export default {
  name: 'content-editor',
  data:function(){
    return {
    }
  },
  props:{
    content:{required:true}
  },
  watch:{
    content:function (newContent){

      let editor=document.getElementById('md-content')
      let offset=0;
      try{
        offset=window.getSelection().getRangeAt(0).startOffset;
      }catch(e){}
      editor.innerText=newContent;


      let range=document.createRange();
      let maxLength=editor.innerText.length;
      range.setStart(editor.firstChild,Math.min(offset,maxLength));

      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);

    } 
  },
  methods:{
    updateData(){
      this.$emit('contentUpdate',document.getElementById('md-content').innerText);
    },
  }
}
</script>

<style lang="scss" scoped>
 #md-content{
    width:100%;
    resize: none;
    box-sizing: border-box;
    background: #fffefa;
    border:0px;
    border-top:solid 1px rgba(0,0,0,0.1);
    border-bottom:solid 1px rgba(0,0,0,0.1);
    font-size: 20px;
    outline: none;
    min-height:300px;
    padding: 20px;
    line-height: 1.5;
    word-spacing: 5px;
    letter-spacing: 1px;
  }
</style>

