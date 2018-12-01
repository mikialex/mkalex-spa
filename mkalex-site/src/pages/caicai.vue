<template>
  <section>
    <caicai-counter></caicai-counter>
    <div class="lyric">
      <p>这么多的日子里</p>
      <p>你都是心事</p>
    </div>
  </section>
</template>

<script>
import Counter from "@/components/caicai/caicai-count.vue";
export default {
  components: {
    "caicai-counter": Counter
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.lyric {
  font-family: futura;
  text-align: center;
  font-size: 12px;
  margin-top: 20px;
  color: #666;
}
</style>
