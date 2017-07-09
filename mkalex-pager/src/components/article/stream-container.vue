<template>
  <section class="stream-container"> 
    <stream-article-block></stream-article-block>
    <stream-article-block></stream-article-block>
    <stream-article-block></stream-article-block>
  </section>
</template>

<script>
import Block from './stream-block'
export default {
  components:{
    'stream-article-block':Block,
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.stream-container{
  width:100%;
}

</style>
