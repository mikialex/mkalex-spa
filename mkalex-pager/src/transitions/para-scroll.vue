<template>
  <div class='para' :style="{transform: 'translateY('+toTop+'px)'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'para-scroll',
  props: {
    velocityFactor: {
      default: 0,
    },
    originHeight:{
      default: -1,
    }
  },
  data: function () {
    return {
      id: null,
      originTop: 0,
      currentScroll:0,
    }
  },
  computed:{
    delta(){
      return this.originTop-this.currentScroll;
    },
    toTop(){
      return this.delta*this.velocityFactor;
    }
  },
  methods: {
    getElementViewTop(element) {
      var actualTop = element.offsetTop;
      var current = element.offsetParent;
      while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
      }
      if (document.compatMode == "BackCompat") {
        var elementScrollTop = document.body.scrollTop;
      } else {
        var elementScrollTop = document.documentElement.scrollTop;
      }
      return actualTop - elementScrollTop;
    }
  },
  mounted() {
    // console.log(this.getElementViewTop(this.$el))
    if(this.originHeight===-1){
      this.originTop=this.getElementViewTop(this.$el);
    }
    this.id = window.addEventListener('scroll', (e) => {
      this.currentScroll=window.pageYOffset;
    })
  },

}
</script>

<style lang="scss" scoped>
@import '~globalSass';

</style>
