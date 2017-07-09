<template>
  <section>
    <archive-article-block v-for="article in this.$store.state.articles.articleList"
    :key="article.urlname"
    :title="article.title"
    :subTitle="article.sub_title"
    ></archive-article-block>
     <archive-article-block
    :key="'323244334'"
    ></archive-article-block>
  </section>
</template>

<script>
import block from '@/components/article/archive-block'
export default {
  components:{
    'archive-article-block':block,
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


