<template>
  <span class="tag"
  :class="{'has-this-tag': hasTag, 'can-toggle': canToggle}" 
  @click="toggleActiveTag()">
    {{name}}
    <i class="fa fa-trash" @click="deleteTag()"></i>
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

.can-toggle {
  cursor: pointer;
}

.has-this-tag {
  background: #f54 !important;
  color: #fff;
}
</style>


