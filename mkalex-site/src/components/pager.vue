<template>
  <div class="pager">
    <button>pre</button>
    <div v-for="n in listCount" :key="n">
      {{n}}
    </div>
    <button>nex</button>
  </div>
</template>

<script>
export default {
  props: {
    list: {required: true},
  },
  data(){
    return {
      currentPage: 0,
    }
  },
  computed:{
    listCount(){
      return 2;
    }
  }
}
</script>

<style lang="scss" scoped>
.pager{
  display: flex;
  
}
</style>

