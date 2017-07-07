<template>
  <section>
    <archive-article-block></archive-article-block>
    <archive-article-block></archive-article-block>
    <archive-article-block></archive-article-block>
  </section>
</template>

<script>
import block from '@/components/article/block'
export default {
    components:{
    'archive-article-block':block,
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

section{
  width:100%;
}
</style>


