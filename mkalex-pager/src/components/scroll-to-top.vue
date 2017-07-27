<template>
  <transition name="slide-fade">
    <div class="scroll-to-top" v-if="!isShow" @click="toTop()"
    :style="{ bottom: toBottom + 'px' }">
      <i class="fa fa-arrow-up" aria-hidden="true"></i>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      currentScroll: 0,//window.pageYOffset
      timer:null,
    }
  },
  computed: {
    toBottom() {
      let h=document.body.clientHeight-this.currentScroll-window.innerHeight
      if ( h < this.botttomLimit){//should change
        return this.botttomLimit-h
      }else{
       return 20 
      }
    },
    isShow(){
      return this.showHeight>this.currentScroll
    },
  },
  methods:{
    handleScroll(){  //so easy that needn't debounce
      this.currentScroll=window.pageYOffset
    },
    toTop(){ //back to top
      this.timer = setInterval(()=>{
        let speed = Math.floor(-this.currentScroll / 6);
        scroll(0,this.currentScroll + speed);
        if(this.currentScroll === 0){
          clearInterval(this.timer); 
        }
      },30)
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
      default: 250,
      required: false,
    },
  },
  mounted(){
    window.addEventListener('resize',this.handleResize)
    window.addEventListener('scroll',this.handleScroll)
    let event = new Event('scroll');
    window.dispatchEvent(event)
  },
  destoryed(){
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

////transition
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
/////


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
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0 6px 3px 0 rgba(0, 0, 0, 0.27),
    0 0 4px 0 rgba(0, 0, 0, 0.08);
  }
  &:active {
    box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.27),
  }
}
</style>
