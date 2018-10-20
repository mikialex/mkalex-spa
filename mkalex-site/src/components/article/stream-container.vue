<template>
  <section class="stream-container">
    <stream-article-block v-for="article in detailList" :key="article.urlname" 
    :articleInfo="article"
    ></stream-article-block>

    <div v-if="!isLoaded" class="loading">
      <loading-dot></loading-dot>
    </div>

    <h1 class="em-hint" v-if="detailList.length===0&&isLoaded">作者似乎<br>nothing here</h1>
  </section>
</template>

<script>
import Block from './stream-block'
export default {
  components: {
    'stream-article-block': Block,
  },
  computed:{
    detailList(){
      console.log('update')
      return this.$store.state.articles.detailList;
    },
    isLoaded(){
      return this.$store.state.articles.isArticleListLoaded
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.loading{
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.stream-container {
  width: 100%;
}

.em-hint{
  text-align: center;
  font-size:64px;
}
</style>
