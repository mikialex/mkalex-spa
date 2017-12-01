<template>
  <section>
    <archive-article-block v-for="article in articleList"
    :key="article.urlname"
    :articleInfo="article"
    ></archive-article-block>
    <h1  class="em-hint" v-if="articleList.length===0&&this.$store.state.articles.isArticleListLoaded">作者似乎<br>从未写过东西</h1>
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

.em-hint{
  text-align: center;
  font-size:64px;
}
</style>


