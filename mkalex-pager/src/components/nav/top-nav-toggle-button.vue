<template>
  <div class="nav-toggle" @click="toggleTopNav()">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleTopNav() {
      this.$store.commit('toggleTopNav')
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~globalSass';
.nav-toggle {
  width: 30px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around; // border: 1px solid rgb(83, 83, 83);
  >div {
    background-color: rgb(108, 108, 108);
    height: 3px;
    width: 25px; // border-radius: 5px;
  }
}
</style>
