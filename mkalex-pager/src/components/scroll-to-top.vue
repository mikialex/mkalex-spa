<template>
  <div class="scroll-to-top">
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentScroll: 0,//window.pageYOffset
    }
  },
  computed: {
    top() {

    },
  },
  props: {
    topLimit: {
      type: Number,
      default: 0,
      required: false,
    },
    botttomLimit: {
      type: Number,
      default: 0,
      required: false,
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';
.scroll-to-top {
  width: rem(50px);
  height: rem(50px);
  position: fixed;
  right: 5vw;
  bottom: 10px;
  border-radius: rem(25px);
  background: #FFFFFF;
  cursor: pointer;
  box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.27),
  0 0 4px 0 rgba(0, 0, 0, 0.08);

  &:hover {
    box-shadow: 0 6px 3px 0 rgba(0, 0, 0, 0.27),
    0 0 4px 0 rgba(0, 0, 0, 0.08);
  }
}
</style>
