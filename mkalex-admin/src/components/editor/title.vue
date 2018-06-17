<template>
  <div class="title-part">
    <input type="text" 
        class="title-editor" 
        spellcheck="false" 
        placeholder="请输入标题"  
        v-model="title">
    <input type="text" 
        class="sub-title-editor"
        spellcheck="false"
         placeholder="请输入副标题"   
        v-model="subTitle">
  </div>
</template>

<script>
export default {
  name: 'content-editor',
  data(){
    return {
    }
  },
  computed: {
    title:{
      get(){
        return this.$store.state.editor.title;
      },
      set(val){
        this.$store.commit('editor/setTitle', val);
      }
    },
    subTitle:{
      get(){
        return this.$store.state.editor.subTitle;
      },
      set(val){
        this.$store.commit('editor/setSubTitle', val);
      }
    },
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>

.title-part {
  > .title-editor {
    width: 100%;
    border: 0px;
    font-size: 24px;
    font-weight: bold;
    padding: 5px;
    &:hover{
      background: #eee;
    }
    &:focus{
      border-bottom: solid 3px rgb(242, 60, 60);
    }
  }
  >.sub-title-editor {
    width: 100%;
    padding: 2px;
    padding-left:10px;
    border: 0px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
    &:hover{
      background: #eee;
    }
    &:focus{
      border-bottom: solid 3px rgb(242, 60, 60);
    }
  }
}
</style>

