<template>
  <transition name="splice">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name:'trans-splice',
}
</script>

<style lang="scss" scoped>
// @import '~globalSass';


.splice-enter-active,  {
  transition: all .5s
}
.splice-enter, .splice-leave-active {
  opacity: 0;
  transform: translate(10px);
  transform-origin:0% 0%;
  // transform: rotate3d(0, 1, 0, 40deg) 
  // rotate3d(1, 0, 0, 25deg)
  // rotate3d(2, 1, 3, -10deg)
  // translate(100px);
}

</style>
