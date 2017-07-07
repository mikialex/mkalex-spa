<template>
  <div class="archive-block">
  <div class="a-b-archive-block inv-10">
    <time-plate></time-plate>
  </div>
  <div class="title-section">
    <h2>{{title}}</h2>
    <h3>{{subTitle}}</h3>
    <div style="width:100%;height:40px;background:#eee;">d</div>
  </div>
  <img src="../../assets/defaultBlogCover.png" class="inv-7">
  </div>
</template>

<script>
import timePlate from './time-plate'
export default {
  components:{
    'time-plate':timePlate
  },
  props:{
    title:{
      default:'Implementations of grid layout system imptions of grid layout system'
    },
    subTitle:{
      default:'Implementations of grid layout system Implementations of grid layout system Implementations of grid layout system'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.archive-block{
  width:100%;
  height:150px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FCFCFC;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.06), 0 5px 2px 0 rgba(0,0,0,0.16);
  border-radius: 5px;
  >img{
    min-width:240px;
    height:130px;
    border-radius:5px;
    margin:10px;
  }
}

.a-b-archive-block{
  margin-left:-20px;
  margin-right:10px;
}

.title-section{
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  flex-grow:1;
  >h2{
    margin:5px;margin-bottom: 0px;
    font-size:rem(28px);
  }

  >h3{
    margin:5px;margin-top:0px;
    font-size:rem(20px);
  }
}

</style>
