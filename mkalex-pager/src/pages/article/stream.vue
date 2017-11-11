<template>
  <stream-container :detailList="this.$store.state.articles.detailList"></stream-container>
</template>

<script>
import container from '@/components/article/stream-container.vue'
export default {
  components:{
    'stream-container':container,
  }
}
</script>

<style>
  
</style>
