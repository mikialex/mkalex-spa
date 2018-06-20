<template>
  <section class="stream-container">
    <stream-article-block v-for="article in detailList" :key="article.urlname" 
    :articleInfo="article"
    ></stream-article-block>


    <h1 class="em-hint" v-if="!isLoaded">加载中...</h1>

    <h1 class="em-hint" v-if="detailList.length===0&&isLoaded">作者似乎<br>从未写过东西</h1>
  </section>
</template>

<script>
import Block from './stream-block'
export default {
  mounted(){
    // setTimeout(()=>{
    //   window.dispatchEvent(new Event('resize'));
    // }, 500);
  },
  components: {
    'stream-article-block': Block,
  },
  props:{
    // detailList:{required:true}
  },
  data() {
    return {
      // detailList:[]
    }
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

.stream-container {
  width: 100%;
}

.em-hint{
  text-align: center;
  font-size:64px;
}
</style>
