<template>
  <div class="tags-editor">
    <div class="serach-bar">
      <el-input v-model="searchInput" 
      placeholder="请输入标签" 
      clearable
      size="small"
      class="input"
      ></el-input>
      <el-button 
      :disabled="!canAddNew"
      size="small"
      @click="addNewtag"
      >Create New</el-button>
    </div>
    <div class="tags-editor-container">
      <span v-for="tag in onSearchViewTag" 
      :class="{'has-this-tag': tag.has, 'can-toggle': useAsEntityTagViewer}" 
      @click="toggleActiveTag(tag.name,tag.has)"
      :key="tag.name">
        {{tag.name}}
        <i class="fa fa-trash" @click="deleteTag(tag.name)"></i>
      </span>
      <h1 v-if="onSearchViewTag.length === 0">no tags found</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    urlname: { default: "" }
  },
  data() {
    return {
      searchInput: ""
    };
  },
  computed: {
    allTags() {
      return this.$store.state.tag.tagList;
    },
    useAsEntityTagViewer() {
      return this.urlname !== "";
    },
    tags() {
      if (this.useAsEntityTagViewer) {
        return this.$store.state.tag.entityTags;
      } else {
        return [];
      }
    },
    viewTags() {
      return this.allTags.map(tag => {
        return {
          name: tag.tag_name,
          has: this.checkExist(tag.tag_name)
        };
      });
    },
    onSearchViewTag() {
      return this.viewTags.filter(tag => {
        return (
          tag.name.indexOf(this.searchInput) !== -1 ||
          tag.name.toUpperCase().indexOf(this.searchInput.toUpperCase()) !== -1
        );
      });
    },
    canAddNew() {
      const checkList = this.viewTags.filter(tag => {
        return tag.name === this.searchInput;
      });
      return checkList.length === 0 && this.searchInput !== "";
    }
  },
  mounted() {
    this.$store.dispatch("tag/getTags");
    if (this.useAsEntityTagViewer) {
      this.$store.dispatch(
        "tag/getEntityTags",
        this.$store.state.editor.urlname
      );
    }
  },
  methods: {
    checkExist(name) {
      let ret = false;
      this.tags.forEach(tag => {
        if (tag.tag === name) {
          ret = true;
        }
      });
      return ret;
    },
    addNewtag() {
      this.$store.dispatch("tag/addNewTags", this.searchInput);
    },
    deleteTag(tagName) {
      this.$confirm("此操作将永久删除该tag, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$store.dispatch("tag/deleteTags", tagName);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    toggleActiveTag(name, status) {
      if (this.useAsEntityTagViewer) {
        this.$store.dispatch("tag/toggleEntityTags", {
          urlname: this.$store.state.editor.urlname,
          tagname: name,
          status: status
        });
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.tags-editor {
  > .tags-editor-container {
    border: 1px dotted rgba(0, 0, 0, 0.1);
    padding: 10px;
    line-height: 30px;
    > .can-toggle {
      cursor: pointer;
    }
    > span {
      cursor: default;
      background: #000;
      color: #fff;
      display: inline-block;
      border-radius: 3px;
      padding: 5px;
      margin: 5px;
      &:hover {
        > i {
          width: 18px;
        }
      }
      > i {
        width: 0px;
        overflow: hidden;
        transition: 150ms;
        cursor: pointer;
        &:hover {
          color: #f45;
        }
      }
    }
  }
}

.has-this-tag {
  background: #f54 !important;
  color: #fff;
}

.serach-bar {
  display: flex;
  padding: 5px;
  > .input {
    max-width: 150px;
    margin-right: 5px;
  }
}
</style>

