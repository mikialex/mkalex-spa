<template>
  <section>
    <img src="../../assets/logo.svg" class="nav-min-logo"></img>
    <img src="../../assets/slogon.svg" class="nav-min-slogon"></img>
    <toggle-button></toggle-button>
  </section>
</template>

<script>
import toggleButton from './top-nav-toggle-button.vue'
export default {
  components: {
    'toggle-button': toggleButton,
  },
  methods: {
    toggleTopNav() {
      this.$store.commit('toggleTopNav')
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~globalSass';
section {
  display: none;
  width: 100%;
  border-bottom: solid 2px rgb(235, 235, 235);

  @media (max-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: rem(55px);
  }
  >.nav-min-logo {
    width: 30px;
    margin-left: rem(5px);
  }
  >.nav-min-slogon {
    width: 150px;
  }
}
</style>
