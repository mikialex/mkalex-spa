<template>
  <div class="tags" >
    <h3>TAGS GROUP</h3>
    <div class="tags-container">
      <span v-for="tag in tagList" :key="tag.tag_name">{{tag.tag_name}}
        <i class="fa fa-trash" @click="deleteTag(tag.tag_name)"></i>
      </span>
    </div>
    <input type="text" v-model="newTagName"> <button v-if="canAddNew" @click="addNewtag">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTagName:'',
    };
  },
  computed:{
    tagList() {
      return this.$store.state.tag.tagList;
    },
    canAddNew(){
      let find=false;
      this.tagList.forEach(tag => {
        if(tag.tag_name===this.newTagName){
          find=true;
        }
      });
      return this.newTagName!==''&&!find;
    }
  },
  methods:{
    addNewtag(){
      this.$store.dispatch('tag/addNewTags', this.newTagName);
    },
    deleteTag(tagName){
      this.$store.dispatch('tag/deleteTags', tagName);
    }
  }
};
</script>

<style lang="scss" scoped>
.tags{
  >.tags-container{
    border: 1px dotted rgba(0,0,0,0.1);
    padding:10px;
    line-height: 20px;
    >span{
      background: #000;
      color:#fff;
      display: inline-block;
      border-radius:3px;
      padding: 5px;
      margin:5px;
      >i{
        cursor: pointer;
        &:hover{
          color:#f45;
        }
      }
    }
  }
}
</style>