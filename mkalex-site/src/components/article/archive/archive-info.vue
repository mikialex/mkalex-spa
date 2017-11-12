<template>
  <div class="ar-info">
    <i class="fa fa-calendar ar-info-cal"></i>
    <div class="ar-info-pv">
      <i class="fa fa-eye"></i>1235
    </div>
    <div class="ar-info-tags">
      <span>sdfasdf</span>
      <span>sdfasdf</span>
      <span>sdfasdf</span>

      <span>sdfasdf</span>

      <span>sdfasdf</span>
    </div>
  </div>
</template>

<script>
export default {
  // components:{
  //   'time-plate':timePlate
  // },
  props: {
    title: {
      default: 'Implementations of grid layout system imptions of grid layout system'
    },
    subTitle: {
      default: 'Implementations of grid layout system Implementations of grid layout system Implementations of grid layout system'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.ar-info {
  width: 100%;
  height: 40px;
  background: #eee;
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding-left:10px;
  padding-right:10px;
  box-sizing: border-box;
}

.ar-info-cal{
  padding-right:10px;
}

.ar-info-pv{
  margin-right:10px;
}

.ar-info-tags{
  flex-grow: 1;
  text-align: right;
  >span{
    background: #ddd;
    padding-left:5px;
    padding-right:5px;
    border-radius: 20px;
  }
}
</style>
