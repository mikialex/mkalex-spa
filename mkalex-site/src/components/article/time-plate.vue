<template>
  <div class="time-plate"
  :style="{background: color}">
    <div class="time-plate-month">
      {{month}}
    </div>
    <div class="time-plate-day">
      {{day}}
    </div>
    <div class="time-plate-year">
      {{year}}
    </div>
  </div>
</template>

<script>
import {getRandomLightColor, getRandomDarkColor} from '../../util/color';
import {getMonthString} from '../../util/date';
export default {
  props:{
    date:{
      default:null
    }
  },
  data(){
    return {
      color: getRandomLightColor()
    }
  },
  computed:{
    month(){
      if(this.date){
        return getMonthString(this.date);
      }
      return '???????';
    },
    day(){
      if(this.date){
        return this.date.substring(8,10)
      }
        return '??'
    },
    year(){
      if(this.date){
        return this.date.substring(0,4)
      }
        return '????'
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.time-plate{
  height:125px;
  width:125px;
  border-radius:75px;
  color:#fff;
  border: 5px solid #fff;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,0.07),
  inset 0px 1px 0px 0px rgba(0,0,0,0.2),
  0px 1px 0px 0px rgba(0,0,0,0.2);
  text-shadow: 0px 1px 0px rgba(0,0,0,0.5);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items:center;
  font-family:'Gill Sans', 'futura', sans-serif;
  >div{
    text-align: center;
  }
}

.time-plate-month{
  font-size: 18px;
  font-weight:200;
}

.time-plate-day{
  font-size: 60px;
  line-height: rem(40px);
  font-weight:100;
}

.time-plate-year{
  font-size: 23px;
  font-weight:300;
}
</style>

