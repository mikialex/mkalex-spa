<template>
  <section>
    <page-title :title="'Portfolio'" :subTitle="'Showcase For My Creative Work'"></page-title>
    <container-mid>
      <portfolio-container :portfolioList="this.$store.state.portfolioList"></portfolio-container> 
    </container-mid>
  </section>
</template>

<script>
import PageTitle from "@/components/title/title-main";
import Container from "@/components/portfolio/container";
export default {
  components: {
    "page-title": PageTitle,
    "portfolio-container": Container
  },
  mounted() {
    this.$store.commit("reloadArticleList");
    this.$ajax.get(this, this.$ajax.apis.articleList).then(data => {
      this.$store.state.portfolioList = data.filter(item => {
        return item.usefor === "portfolio";
      });
      this.$store.commit("articleListLoaded");
    });
  }
};
</script>
