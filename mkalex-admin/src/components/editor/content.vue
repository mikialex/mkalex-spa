<template>
  <div>
    <div class="content-preview" @click="toggleOpen" v-if="this.content!==''">
      {{content}}
    </div>
    <div class="content-preview" @click="toggleOpen" v-if="this.content===''">
      还没有内容
    </div>

    <content-editor v-if="isOpen"
    :content="content" :urlname="urlname"
    @contentUpdate="updateData"
    @closeEditor="toggleOpen"
    ></content-editor>

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
      isOpen:false,
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
  min-height:300px;
  text-align: justify;
  &:hover{
    background: #eee;
  }
}

</style>

