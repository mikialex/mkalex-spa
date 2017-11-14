<template>
  <div  id="md-content" spellcheck="false" contenteditable="true" @input="updateData">{{content}}</div>
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

