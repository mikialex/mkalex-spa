<template>
  <section>
    <page-title :title="'Article'" :subTitle="'What I said, maybe wrong'"></page-title>
    <article-switcher></article-switcher>
    <container-mid>
      <trans-fade>
        <router-view></router-view>
      </trans-fade>
    </container-mid>
  </section>
</template>

<script>
import PageTitle from "@/components/title/title-main";
import switcher from "@/components/nav/article-switcher";
export default {
  components: {
    "page-title": PageTitle,
    "article-switcher": switcher
  },
  mounted() {
    this.$store.commit("reloadArticleList");
    this.$ajax
      .get(this, this.$ajax.apis.articleList)
      .then(data => {
        this.$store.state.articles.articleList = data.filter(item => {
          return item.usefor === "article";
        });
        this.$store.commit("articleListLoaded");
      })
      .then(() => {
        //get detail list
        this.$store.state.articles.detailList = [];
        for (let i = 0; i < 3; i++) {
          if (this.$store.state.articles.articleList[i]) {
            let temp = this.$store.state.articles.articleList[i];
            temp.content = "loading.....";
            this.$store.state.articles.detailList.push(temp);
          }
        }
      });
  }
};
</script>
