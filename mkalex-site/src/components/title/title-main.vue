<template>
  <container-mid>
    <header class="title">
      <div>
        <h1>{{title}}</h1>
        <h2>{{subTitle}}</h2>
      </div>
      <svg-logo class="logo"></svg-logo>
    </header>
  </container-mid>
</template>

<script>
import Logo from "./logo-svg-hover.vue";
export default {
  components: {
    "svg-logo": Logo
  },
  props: {
    title: {
      type: String,
      default: "title required"
    },
    subTitle: {
      type: String,
      default: "."
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 80px;
  font-family: futura;
  @media (max-width: 500px) {
    margin-top: 60px;
  }
}

h1 {
  font-size: 28px;
  display: block;
  margin: 0px;
  margin-top: 10px;
}

h2 {
  font-size: 15px;
  display: block;
  color:#888;
  margin: 0px;
}

.logo{
  position: relative;
  top:-10px;
  left:-10px;
  @media (max-width: 500px) {
    display: none;
  }
}
</style>
