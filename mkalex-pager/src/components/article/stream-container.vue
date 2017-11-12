<template>
  <section class="stream-container">
    <stream-article-block v-for="article in detailList" :key="article.urlname" 
    :articleInfo="article"
    ></stream-article-block>
  </section>
</template>

<script>
import Block from './stream-block'
export default {
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.stream-container {
  width: 100%;
}
</style>
