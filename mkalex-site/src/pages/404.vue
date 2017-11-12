<template>
<div class="mk-404">
  <div style="height:100px"></div>
    <h1>404</h1>
    <h2>页面不存在</h2>
    <h3>可能因为该路由被重置或过期 <br>或者其他神秘的原因</h3>
    <button onclick="window.history.go(-1)">返回上一页</button>
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
  h1 {
    text-align: center;
    width: 100%;
    font-weight: 100;
    font-size: rem(81px);
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

  button {
    display: block;
    margin: auto;
    width: rem(100px);
    height: rem(100px);
    border-radius: rem(50px);
    outline: none;
    background-color: #fff;
    border-style: none;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
    font-size: rem(14px);
    transition: 0.2s ease-out;
    &:hover {
      background-color: #000;
      box-shadow: 0px 3px 3px 0px rgb(255, 0, 13);
      color: #fff;
    }
    &:active {
      background-color: rgb(255, 0, 13);
    }
  }
}
</style>
