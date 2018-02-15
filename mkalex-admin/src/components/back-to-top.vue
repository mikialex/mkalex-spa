<template>
  <div class="back-to-top" @click="backToTop" v-if="show">
    <i class="fas fa-angle-double-up"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      currentScroll: 0,
      isAllowAutoTop: false
    };
  },
  computed: {
    show() {
      return this.currentScroll > 1500;
    }
  },
  methods: {
    handleScroll() {
      this.currentScroll = window.pageYOffset;
    },
    handleMouseWheel() {
      this.isAllowAutoTop = false;
    },
    step() {
      const speed = Math.floor(-this.currentScroll / 6);
      scroll(0, this.currentScroll + speed);
      if (this.currentScroll !== 0 && this.isAllowAutoTop) {
        window.requestAnimationFrame(this.step);
      } else {
        window.cancelAnimationFrame(this.timer);
        this.timer = null;
      }
    },
    backToTop() {
      this.isAllowAutoTop = true;
      this.timer = window.requestAnimationFrame(this.step);

    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('mousewheel', this.handleMouseWheel);
    const event = new Event('scroll');
    window.dispatchEvent(event);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('mousewheel', this.handleMouseWheel);
  },
};
</script>

<style lang="scss" scoped>
.back-to-top{
  width:50px;
  height:50px;
  position:fixed;
  right:20px;
  bottom:20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px rgba(0, 0, 0, 0.02);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:200ms;
  &:hover{
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
    border: solid 1px rgba(0, 0, 0, 0.02);
  }
}

</style>