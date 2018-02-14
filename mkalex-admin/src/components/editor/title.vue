<template>
  <div class="title-part">
    <input type="text" 
        class="title-editor" 
        :class="{'form-changed':isTitleChange}" 
        spellcheck="false" 
        placeholder="请输入标题"  
        v-model="inputTitle">
    <input type="text" 
        class="sub-title-editor"
        spellcheck="false"
         placeholder="请输入副标题"   
        v-model="inputSubTitle">
  </div>
</template>

<script>
export default {
  name: 'content-editor',
  data(){
    return {
      inputTitle:'',
      inputSubTitle:'',
    }
  },
  mounted(){
    this.inputTitle = this.$store.editor.title;
    this.inputSubTitle = this.$store.editor.subTitle;
  },
  mounted(){
    this.inputTitle=this.title;
    this.inputSubTitle=this.subTitle;
  },
  computed: {
    isTitleChange(){
      return this.inputTitle !== this.title;
    }
  },
  watch:{
    inputTitle(newValue){
      this.$emit('newTitle', newValue);
    },
    inputSubTitle(newValue){
      this.$emit('newSubTitle', newValue);
    },
  },
  methods:{
    // update(){
    //   this.$emit('update:title', newValue)
    // },
  }
}
</script>

<style lang="scss" scoped>
.title-part {
  > .title-editor {
    width: 100%;
    border: 0px;
    font-size: 36px;
    font-weight: bold;
    padding: 10px;
    margin-left:-10px;
    &:focus{
      border-bottom: solid 3px rgb(242, 60, 60);
    }
  }
  >.sub-title-editor {
    width: 100%;
    padding: 10px;
    border: 0px;
    font-size: 24px;
    font-weight: bold;
    margin-left: -10px;
    margin-bottom: 20px;
    &:focus{
      border-bottom: solid 3px rgb(242, 60, 60);
    }
  }
}
</style>

