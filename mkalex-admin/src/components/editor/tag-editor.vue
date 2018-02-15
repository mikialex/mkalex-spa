<template>
  <div class="tags-editor">
    <h4><i class="fas fa-tags"></i>tags</h4>
    <span v-if="viewTags.length===0">no tag</span>
    <div class="tags-editor-container">
      <span v-for="tag in viewTags" 
      :class="{'has-this-tag':tag.has}" 
      @click="toggleActiveTag(tag.name,tag.has)"
      :key="tag.name">{{tag.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    urlname: { require: true }
  },
  data: function() {
    return {
    };
  },
  computed: {
    allTags(){
      return this.$store.state.tag.tagList;
    },
    tags(){
      return this.$store.state.tag.entityTags;
    },
    viewTags() {
      return this.allTags.map(tag => {
        return {
          name: tag.tag_name,
          has: this.checkExist(tag.tag_name),
        };
      });
    }
  },
  mounted() {
    this.$store.dispatch('tag/getTags');
    this.$store.dispatch('tag/getEntityTags', this.$store.state.editor.urlname);
  },
  methods: {
    checkExist(name){
      let ret=false;
      this.tags.forEach(tag => {
        if(tag.tag===name){
          ret= true
        }
      });
      return ret
    },
    toggleActiveTag(name, status) {
      console.log(name, status)
      this.$store.dispatch('tag/toggleEntityTags',{
        urlname: this.$store.state.editor.urlname,
        tagname: name,
        status:status
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.tags-editor {
  h4{
    margin:10px;
    >i{
      margin-right:5px;
    }
  }
  > .tags-editor-container {
    border: 1px dotted rgba(0, 0, 0, 0.1);
    padding: 10px;
    line-height: 30px;
    > span {
      display: inline-block;
      background:#000;
      color:#fff;
      border-radius: 3px;
      padding: 5px;
      margin: 5px;
      cursor: pointer;
      > strong {
        color: #f45;
        cursor: pointer;
      }
    }
  }
}

.has-this-tag {
  background: #f54 !important;
  color: #fff;
}
</style>

