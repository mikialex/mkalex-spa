<template>
  <section class="stream-container">
    <stream-article-block v-for="article in this.detailList" :key="article.urlname" 
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
    detailList:{required:true}
  },
  data() {
    return {
      listSmall:[]
    }
  },
  methods:{
  },
  mounted() {
    // for (let i = 0; i < 2; i++) {
    //   if (this.articleList[i]) {
    //     this.listSmall.push(this.articleList[i])
    //   }
    // }
    // this.listSmall.forEach(article => {
    //   console.log(article.urlname)
    //   this.$ajax.get(this,this.$ajax.apis.articleContent,{urlname:article.urlname})
    //   .then(data=>{
    //     console.log('get article detail :' + data);
    //     article.content=data;
    //   }).catch(this.$ajax.handleErr(this))
    // });
  },
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.stream-container {
  width: 100%;
}
</style>
