<template>
  <transition-group name="list-complete">
    <slot></slot>
  </transition-group>
</template>
<script>
export default {
  name:'list-complete'
}
</script>

<style lang="scss" scoped>
.list-complete-item {
  transition: all 1s;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>

