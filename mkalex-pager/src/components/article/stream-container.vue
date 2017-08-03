<template>
  <section class="stream-container">
    <stream-article-block v-for="article in this.detailList" :key="article.urlname" 
    :title="article.title" :subTitle="article.sub_title" :content="article.content"></stream-article-block>
  </section>
</template>

<script>
import Block from './stream-block'
export default {
  components: {
    'stream-article-block': Block,
  },
  data() {
    return {
      detailList: [],
    }
  },
  methods:{
    getDetailListDetail(){
      let s=[];
      this.listSmall.forEach(article => {
        s.push(article);
      })
      s.forEach(article=>{
        article.content='xxxx';
      })
      this.detailList=this.detailList.concat(s);
      this.detailList.forEach(article=>{
        console.log(article)
        this.$ajax.get(this,'articles/content',{urlname:article.urlname}).then(data=>{
          article.content=data.content;
          this.detailList=this.detailList.concat();// stimulate view refresh
          return data
        })
      })
    },
  },
  mounted() {
    if(this.hasGetList){
      this.getDetailListDetail();
    }
  },
  watch: {
    hasGetList: function (b) {
      if(b){
        console.log('has get new list');
        this.getDetailListDetail();
      }
    }
  },

  computed: {
    hasGetList() {
      return this.$store.state.articles.hasArticleListLoaded
    },
    listSmall() {
      let s = [];
      for (let i = 0; i < 3; i++) {
        if (this.$store.state.articles.articleList[i]) {
          s.push(this.$store.state.articles.articleList[i])
        }
      }
      return s;
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
