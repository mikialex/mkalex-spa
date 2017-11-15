<template>
  <div class="title-part">
    <input type="text" class="title-editor" :class="{'form-changed':isTitleChange}" spellcheck="false" placeholder="请输入标题"  v-model="inputTitle">
    <input type="text" class="sub-title-editor" spellcheck="false"  placeholder="请输入副标题"    v-model="inputSubTitle">
  </div>
</template>

<script>
export default {
  name: 'content-editor',
  data:function(){
    return {
      inputTitle:'',
      inputSubTitle:'',
    }
  },
  props:{
    title:{required:true},
    subTitle:{required:true},
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
  padding-left: 30px;
  padding-right: 30px;
  > .title-editor {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.05);
    font-size: 30px;
    padding: 10px;
  }
  > .sub-title-editor {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
</style>

