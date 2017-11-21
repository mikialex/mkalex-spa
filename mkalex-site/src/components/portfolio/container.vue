<template>
  <section>
    <portfolio-cover v-for="p in portfolioList" :key="p.urlname"
    :portfolioInfo="p"></portfolio-cover>
    <h1  class="em-hint" v-if="portfolioList.length===0">空空如也</h1>
  </section>
</template>

<script>
import block from './block'
export default {
  components:{
    'portfolio-cover':block,
  },
  props:['portfolioList'],
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

section{
  // background: #;
  padding-top: 20px;
}

.em-hint{
  text-align: center;
  font-size:64px;
}

</style>

