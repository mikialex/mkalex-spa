<template>
  <div class ="login-right">
    <div class="form">
      <myform/>
    </div>
    <div class="image-container">
      <img src="./cover.jpg" alt="">
    </div>
  </div>
</template>

<script>
import myform from './login-form';
export default {
  components: { myform }
}
</script>


<style lang="scss" scoped>
.login-right{
  min-width:500px;
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.form{
  position: absolute;
}

.image-container{
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width:100%;
  }
}
</style>

