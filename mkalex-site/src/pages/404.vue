<template>
<div class="mk-404">
  <div style="height:100px"></div>
    <h1>404</h1>
    <h2>Page not found</h2>
    <h3>this route may no longer not supported </h3>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~globalSass';
.mk-404 {
  width: 100%;
  font-family: futura;
  h1 {
    text-align: center;
    width: 100%;
    font-weight: 100;
    font-size: rem(100px);
  }

  h2 {
    text-align: center;
    width: 100%;
    font-weight: 200;
    font-size: rem(32px);
  }
  h3 {
    text-align: center;
    width: 100%;
    font-weight: 300;
    font-size: rem(16px);
  }

}
</style>
