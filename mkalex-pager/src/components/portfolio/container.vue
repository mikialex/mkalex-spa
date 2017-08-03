<template>
  <section>
    <portfolio-cover></portfolio-cover>
    <portfolio-cover></portfolio-cover>
    <portfolio-cover></portfolio-cover>
    <portfolio-cover></portfolio-cover>
  </section>
</template>

<script>
import block from './block'
export default {
  components:{
    'portfolio-cover':block,
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

section{
  background: #000;
}

</style>

