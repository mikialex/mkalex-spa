<template>
  <div class="login">
    <div class="center">
    <loginLeft/>
    <loginRight/>
    </div>
  </div>
</template>

<script>
import loginLeft from "./login-left";
import loginRight from "./login-right";
export default {
  components: {
    loginLeft,
    loginRight
  },
  mounted() {
    this.$store.commit("clearToken");
  }
};
</script>


<style lang="scss" scoped>
.login {
  font-family: futura;
  background: #fff;
  overflow: scroll;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
}

.center {
  width: 800px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>

