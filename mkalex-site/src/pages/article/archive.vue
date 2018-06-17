<template>
  <archive-container :articleList="this.$store.getters.currentPageArticles"></archive-container>
</template>

<script>
import container from '@/components/article/archive/archive-container'
export default {
  components:{
    'archive-container':container,
  }
}
</script>

<style>
  
</style>
