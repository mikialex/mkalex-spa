<template>
  <section>
    <para-scroll :velocityFactor="0.1">
      <div class="right-triangular"></div>
    </para-scroll>
    <para-scroll :velocityFactor="0.25">
      <div class="left-triangular"></div>
    </para-scroll>
    <para-scroll :velocityFactor="0.4">
      <div class="big-slogan">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </para-scroll>
    <!-- <div class="right-triangular"></div> -->
    <!-- <div class="left-triangular"></div> -->
    <!--   
      <div class="big-slogan">
        <div></div>
        <div></div>
        <div></div>
      </div> -->
  
    <container-mid>
      <para-scroll :velocityFactor="0.15">
        <h1>PURSUE THE ‘UTMOST
          <br> FUSION OF ART & TECH</h1>
      </para-scroll>
    </container-mid>
  
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '~globalSass';

section {
  // display: flex;
  width: 100%; // justify-content: space-between
  // margin-top: -200px;
  // position: relative;
  // z-index:1;
}

.left-triangular {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 100px 0 100px 50vw;
  border-color: transparent transparent transparent #ff1223;
  margin-top: -370px;
  margin-bottom: -100px;
}

.right-triangular {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 200px 100vw 200px 0;
  border-color: transparent #000 transparent transparent; // margin-bottom: -400px;
}

.big-slogan {
  margin-bottom: -250px;
  z-index: -1;
   :first-child {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 200px 100vw;
    border-color: transparent transparent #ff1223 transparent;
  }
   :nth-child(2) {
    width: 100vw;
    height: 100px;
    background: #ff1223
  }
   :last-child {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 200px 100vw 0 0;
    border-color: #ff1223 transparent transparent transparent;
  }
}

h1 {
  font-size: rem(72px);
  color: #fff;
  margin-top: -200px;
  text-align: right;
  font-family: futura;
  width: 100%;
  text-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
}
</style>
