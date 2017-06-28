<template>
  <section>
    <div class="right-triangular"></div>
    <div class="left-triangular"></div>

  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
section {
  // display: flex;
  width: 100%; // justify-content: space-between
  margin-top:-10vh;
}

.left-triangular {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7vw 0 6vw 50vw;
  border-color: transparent transparent transparent #ff1223;
  margin-top: -18vw;
}

.right-triangular {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10vw 99vw 8vw 0;
  border-color: transparent rgba(0, 0, 0, 0.5) transparent transparent;
}
</style>
