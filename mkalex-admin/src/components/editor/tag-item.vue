<template>
  <span class="tag"
  :class="{'has-this-tag': hasTag, 'can-toggle': canToggle}" 
  @click="toggleActiveTag()">
    {{name}}
    <i class="fa fa-trash delete" @click="deleteTag()"></i>
  </span>
</template>

<script>
export default {
  props: {
    hasTag: {
      default: false
    },
    canToggle: {
      default: false
    },
    name: {
      required: true
    }
  },
  methods: {
    toggleActiveTag() {
      this.$emit("toggleTag");
    },
    deleteTag() {
      this.$emit("deleteTag");
    }
  }
};
</script>

<style lang="scss" scoped>
.tag {
  transition: 100ms;
  position: relative;
  cursor: default;
  background: rgb(117, 172, 100);
  color: #fff;
  display: inline-block;
  border-radius: 3px;
  padding: 5px;
  margin: 5px;
  &:hover {
    > .delete {
      opacity: 1;
    }
  }
}

.delete{
  opacity: 0;
  overflow: hidden;
  transition: 150ms;
  position: absolute;
  top:-15px;
  right:-15px;
  cursor: pointer;
  background: rgb(216, 71, 71);
  width: 30px;
  height: 30px;
  border-radius: 30px;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  z-index: 1;
  &:hover {
  background: rgb(145, 21, 21);
  }
}

.can-toggle {
  cursor: pointer;
}

.has-this-tag {
  background: #f54 !important;
  color: #fff;
}
</style>


