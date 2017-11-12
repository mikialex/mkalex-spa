<!-- <container-mid> demo
  <block-flex :popWidth="1000">
    <block-flex :end="true" :width="'1/2'">
      <person-info></person-info>
    </block-flex>
    <block-flex :end="true" :invWidth="700" :width="'1/2'">
      <person-stat></person-stat>
    </block-flex>
  </block-flex>
</container-mid> -->

<template lang="html">
  <div class="block-flex"  :class="{ block_flex_end: end ,block_flex_pop:shouldPop,block_flex_inv:shouldInv}" :style="{width:realWidth}">
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  name:'block-flex',
  data() {
    return {
      shouldPop: false,
      shouldInv:false,
    };
  },

  props:{
    end: {
     default: false
   },
   popWidth:{
     default: null
   },
   invWidth:{
     default: null
   },
   width:{
     default:null
   }
  },

  computed: {
    realWidth:function(){
      if(this.width===null){
        return ''
      }
      let a,b  //a/b
      let slashPosition=this.width.indexOf('/');
      a=this.width.slice(0,slashPosition);
      b=this.width.slice(slashPosition+1);
      return a/b * 100 + '%'
    }
  },
  mounted() {
    if(this.popWidth!==null){
      this.mediaQueryListPop = window.matchMedia("(max-width: "+this.popWidth+"px)")
      this.updateShouldPop()
      this.mediaQueryListPop.addListener(this.updateShouldPop)
    }
    if(this.invWidth!==null){
      this.mediaQueryListInv = window.matchMedia("(max-width: "+this.invWidth+"px)")
      this.updateShouldInv()
      this.mediaQueryListInv.addListener(this.updateShouldInv)
    }
  },
  beforeDestroy() {
    if (this.mediaQueryListPop) {
      this.mediaQueryListPop.removeListener(this.updateShouldPop)
    }
    if (this.mediaQueryListInv) {
      this.mediaQueryListInv.removeListener(this.updateShouldInv)
    }
  },
  methods: {
    updateShouldPop() {
      this.shouldPop = this.mediaQueryListPop.matches
    },
    updateShouldInv() {
      this.shouldInv = this.mediaQueryListInv.matches
    }
  },
  components: {}
}

</script>

<style lang="scss" scoped>

.block-flex{
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: stretch;
    box-sizing: border-box;
}

.block_flex_end{
    margin-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    flex-direction: column;
    width:100%;
}

.block_flex_pop{
  flex-direction: column;
  box-sizing:border-box;
  width:100% !important;
  >*{
      width:100% !important;
  }
}

.block_flex_inv{
  display: none !important;
}
</style>
