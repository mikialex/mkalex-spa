<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name:'trans-fade',
}
</script>

<style lang="scss" scoped>
@import '~globalSass';


.fade-enter-active,  {
  transition: all .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
