<template>
  <canvas class="effect-back"></canvas>
</template>

<script>
export default {
  mounted() {
    this.draw();
    window.addEventListener("click", this.draw);
  },
  methods: {
    draw() {
      const canvas = this.$el;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "rgba(0,0,0,0.01)";
      ctx.strokeStyle = "rgba(0,0,0,0.03)";
      for (let i = 0; i < 100; i++) {
        ctx.strokeRect(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          10 + Math.random() * 50,
          10 + Math.random() * 50
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.effect-back {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
}
</style>

