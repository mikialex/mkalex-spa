<template>
  <content-list :type="'article'"></content-list>
</template>

<script>
import list from './content-list.vue'
export default {
  data() {
    return {
    };
  },
  components:{
    'content-list':list,
  },
};
</script>

<style lang="scss" scoped>

</style>