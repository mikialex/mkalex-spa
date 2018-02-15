<template>
  <div class="tags-editor">
    <h4>tags</h4>
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
    // load() {
    //   this.$ajax.get(this, this.$ajax.apis.tagList).then(data => {
    //     console.info("get all tag list :", data);
    //     this.allTags = data;
    //   });

    //   this.$ajax
    //     .get(this, this.$ajax.apis.articleTagList, { urlname: this.urlname })
    //     .then(data => {
    //       console.info("get tag list :", data);
    //       this.tags = data;
    //     });
    // },
    toggleActiveTag(name, status) {
      console.log(name, status)
      this.$store.dispatch('tag/toggleEntityTags',{
        urlname: this.$store.state.editor.urlname,
        tagname: name,
        status:status
      });
      // if (status) {
      //   this.$ajax
      //     .del(this, this.$ajax.apis.articleTag, {
      //       urlname: this.urlname,
      //       tagname: name,
      //       token:this.$store.state.token,
      //     })
      //     .then(data => {
      //       console.log(data);
      //       this.load();
      //     })
      //     .catch(this.$ajax.handleErr(this));
      // } else {
      //   this.$ajax
      //     .post(this, this.$ajax.apis.articleTag, {
      //       urlname: this.urlname,
      //       tagname: name,
      //       token:this.$store.state.token,
      //     })
      //     .then(data => {
      //       console.log(data);
      //       this.load();
      //     })
      //     .catch(this.$ajax.handleErr(this));
      // }
    }
  }
};
</script>


<style lang="scss" scoped>
.tags-editor {
  padding: 30px;
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

