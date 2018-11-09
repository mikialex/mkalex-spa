<template>
  <section>
    <ArticleFilter/>
    <ArchiveBlock
    v-for="article in articleList"
    :key="article.urlname"
    :articleInfo="article"
    ></ArchiveBlock>
    <h1  class="em-hint" v-if="showNotWriteAnything">作者似乎<br>从未写过东西</h1>
    <mk-pager
    :list="this.$store.state.articles.articleList"
    :currentIndex="this.$store.state.articles.currentPage"
    :eachPage="this.$store.state.articles.eachPageNumber"
    @switchPage="switchPage"
    ></mk-pager>
  </section>
</template>

<script>
import ArchiveBlock from "./archive-block";
import ArticleFilter from "./archive-filter";
export default {
  components: {
    ArchiveBlock,
    ArticleFilter
  },
  mounted() {},
  computed: {
    articleList() {
      return this.$store.getters.currentPageArticles;
    },
    showNotWriteAnything() {
      return (
        this.articleList.length === 0 &&
        this.$store.state.articles.isArticleListLoaded
      );
    }
  },
  methods: {
    switchPage(page) {
      this.$store.commit("switchPage", page);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~globalSass";

section {
  width: 100%;
}

.em-hint {
  text-align: center;
  font-size: 64px;
}
</style>


