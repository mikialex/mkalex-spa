<template>
  <section>
    <caicai-counter></caicai-counter>
  </section>
</template>

<script>
import Counter from '@/components/caicai-count.vue'
export default {
  components:{
    'caicai-counter':Counter,
  }
}
</script>

<style lang="scss" scoped>
section{
  width:100vw;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
