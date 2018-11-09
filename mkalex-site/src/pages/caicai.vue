<template>
  <section>
    <caicai-counter></caicai-counter>
    <div class="lyric">
      <p>I've been hiding all my hopes and dreams away</p>
      <p>Just in case I ever need them again someday</p>
      <p>I've been setting aside time</p>
      <p>To clear a little space  <br>in the corner of my mind </p>
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
