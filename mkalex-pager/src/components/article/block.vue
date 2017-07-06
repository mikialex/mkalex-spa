<template>
  <div class="archive-block">
  <div>
    <time-plate></time-plate>
  </div>
  <div>
    <h2>Implementations of grid layout system</h2>
    <h3>Implementations of grid layout system</h3>
    <div></div>
  </div>
  <img src="../../assets/defaultBlogCover.png">
  </div>
</template>

<script>
import timePlate from './time-plate'
export default {
  components:{
    'time-plate':timePlate
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.archive-block{
  width:100%;
  height:150px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FCFCFC;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.06), 0 5px 2px 0 rgba(0,0,0,0.16);
  border-radius: 5px;
  >img{
    width:240px;
    height:130px;
    border-radius:5px;
    margin:10px;
  }
}

</style>
