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
    originToTop:{
      default: -1,
    }
  },
  data: function () {
    return {
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
    },
    handleScroll(){
      this.currentScroll=window.pageYOffset;
    },
  },
  mounted() {
    this.$nextTick(function () { 
    console.info('m',this.$el.getBoundingClientRect().top+window.pageYOffset)
    window.setTimeout(()=>{this.originTop=this.$el.getBoundingClientRect().top+window.pageYOffset;
    
      console.info('m',this.$el.getBoundingClientRect().top+window.pageYOffset)
    },1000)    // TOFIX  SERIOUS
    if(this.originToTop===-1){
      // this.originTop=this.$el.getBoundingClientRect().top+window.pageYOffset;
    }
      window.addEventListener('scroll', this.handleScroll)
  })
    // console.info('m',this.getElementViewTop(this.$el))
    // if(this.originHeight===-1){
    //   this.originTop=this.getElementViewTop(this.$el);
    // }
    //   window.addEventListener('scroll', this.handleScroll)
  },
  destroyed(){
     window.removeEventListener('scroll', this.handleScroll);
    console.log(this.getElementViewTop(this.$el))
  },

}
</script>

<style lang="scss" scoped>
// @import '~globalSass';

</style>
