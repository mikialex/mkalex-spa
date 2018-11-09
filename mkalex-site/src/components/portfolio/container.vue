<template>
  <section>
    <portfolio-cover v-for="p in portfolioList" :key="p.urlname"
    :portfolioInfo="p"></portfolio-cover>

    <div v-if="!isLoaded" class="loading">
      <loading-dot></loading-dot>
    </div>

    <h1 class="em-hint" v-if="portfolioList.length===0&&isLoaded">nothing here</h1>

  </section>
</template>

<script>
import block from "./block";
export default {
  components: {
    "portfolio-cover": block
  },
  props: ["portfolioList"],
  computed: {
    isLoaded() {
      return this.$store.state.articles.isArticleListLoaded;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~globalSass";

section {
  // background: #;
  padding-top: 20px;
}

.loading {
  height: 200px;
  display: flex;
  align-items: center;
}

.em-hint {
  text-align: center;
  font-size: 64px;
}
</style>

