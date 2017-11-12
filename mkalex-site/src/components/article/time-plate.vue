<template>
  <div class="time-plate">
    <div class="time-plate-month">
      January
    </div>
    <div class="time-plate-day">
      16
    </div>
    <div class="time-plate-year">
      2017
    </div>
  </div>
</template>

<script>
export default {
  props:{
    date:{
      default:null
    }
  },
  computed:{
    month(){
      if(this.date){
        return 'dd'
      }
        return '???????'
    },
    day(){
      if(this.date){
        return 'dd'
      }
        return '??'
    },
    year(){
      if(this.date){
        return 'dd'
      }
        return '????'
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.time-plate{
  height:150px;
  width:150px;
  border-radius:75px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,0.07);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items:center;
  >div{
    text-align: center;
    // width:20px;
  }
}

.time-plate-month{
  font-size: 23px;
  font-weight:100;
  color:#555;
}

.time-plate-day{
  font-size: 72px;
  line-height: rem(45px);
  font-weight:100;
  color:#555;
}

.time-plate-year{
  font-size: 23px;
  font-weight:300;
  color:#555;
}
</style>

