<template>
  <section>
    <portfolio-cover v-for="p in portfolioList" :key="p.urlname"
    :portfolioInfo="p"></portfolio-cover>
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

</style>

