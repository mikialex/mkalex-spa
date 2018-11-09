<template>
  <trans-fade>
    <button 
    class="scroll-to-top" 
    v-if="!isShow" 
    @click="toTop()">
      <i class="fa fa-arrow-up" aria-hidden="true"></i>
    </button>
  </trans-fade>
</template>

<script>
export default {
  name: "scroll-to-top",
  data() {
    return {
      currentScroll: 0, //window.pageYOffset
      timer: null,
      allowMove: false
    };
  },
  computed: {
    isShow() {
      return this.showHeight > this.currentScroll;
    }
  },
  methods: {
    handleScroll() {
      this.currentScroll = window.pageYOffset;
    },
    handleWheel() {
      this.allowMove = false;
      this.currentScroll = window.pageYOffset;
    },
    move() {
      let speed = Math.floor(-this.currentScroll / 6);
      scroll(0, this.currentScroll + speed);
      if (this.currentScroll !== 0 && this.allowMove) {
        window.requestAnimationFrame(this.move);
      }
    },
    toTop() {
      //back to top
      if (!this.allowMove) {
        this.allowMove = true;
        window.requestAnimationFrame(this.move);
      }
    }
  },
  props: {
    showHeight: {
      type: Number,
      default: 100,
      required: false
    },
    botttomLimit: {
      type: Number,
      default: 250,
      required: false
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("mousewheel", this.handleWheel);
    window.addEventListener("scroll", this.handleScroll);
    let event = new Event("mousewheel");
    window.dispatchEvent(event);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("mousewheel", this.handleWheel);
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
////transition
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}

.hide-it {
  display: none;
}

.scroll-to-top {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 5vw;
  bottom: 10px;
  border-radius: 100%;
  border: 0px;
  background: #ffffff;
  z-index: 1000;
  box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.27), 0 0 4px 0 rgba(0, 0, 0, 0.08);
  outline: none;
  cursor: pointer;
  transition: 200ms;
  transition-property: transform;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 3px 0 rgba(0, 0, 0, 0.27), 0 0 4px 0 rgba(0, 0, 0, 0.08);
  }
  &:active {
    box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.27);
  }
}
</style>
