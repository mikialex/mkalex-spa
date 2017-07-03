<template>
  <section>
    <div class="scroll-to-top" v-if="!isShow">
      <span>go</span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentScroll: 0,//window.pageYOffset
    }
  },
  computed: {
    toBottom() {
      if (document.body.clientHeight-this.currentScroll < this.botttomLimit){//should change

      }else{
       return 20 + 'px'
      }
    },
    isShow(){
      return this.showHeight>this.currentScroll
    },
  },
  methods:{
    handleResize(){//so easy that needn't debounce
    },
    handleScroll(){//so easy that needn't debounce
      this.currentScroll=window.pageYOffset
    },
  },
  props: {
    showHeight: {
      type: Number,
      default: 100,
      required: false,
    },
    botttomLimit: {
      type: Number,
      default: 300,
      required: false,
    },
  },
  mounted(){
    window.addEventListener('resize',this.handleResize)
    window.addEventListener('scroll',this.handleScroll)
  },
  destoryed(){
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="scss" scoped>
@import '~globalSass';
.hide-it{
  display: none;
}

.scroll-to-top {
  width: rem(50px);
  height: rem(50px);
  position: fixed;
  right: 5vw;
  bottom: 10px;
  border-radius: rem(25px);
  background: #FFFFFF;
  z-index:1000;
  cursor: pointer;
  box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.27),
  0 0 4px 0 rgba(0, 0, 0, 0.08);
  transition:1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0 6px 3px 0 rgba(0, 0, 0, 0.27),
    0 0 4px 0 rgba(0, 0, 0, 0.08);
  }
}
</style>
