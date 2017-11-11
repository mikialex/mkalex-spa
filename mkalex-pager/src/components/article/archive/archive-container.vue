<template>
  <section>
    <archive-article-block v-for="article in articleList"
    :key="article.urlname"
    :articleInfo="article"
    ></archive-article-block>
  </section>
</template>

<script>
import block from './archive-block'
export default {
  components:{
    'archive-article-block':block,
  },
  props:{
    articleList:{required:true}
  },
  mounted(){
  },
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

section{
  width:100%;
}
</style>


