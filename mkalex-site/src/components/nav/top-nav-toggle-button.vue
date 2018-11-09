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
      this.$store.commit("toggleTopNav");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~globalSass";
.nav-toggle {
  width: 25px;
  height: 25px;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: rgb(219, 219, 219);
  }

  > div {
    background-color: rgb(108, 108, 108);
    height: 3px;
    width: 25px; // border-radius: 5px;
  }
}
</style>
