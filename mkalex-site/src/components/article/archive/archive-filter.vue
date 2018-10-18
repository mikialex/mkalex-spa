<template>
  <div class="filter">
    <UISelect :options="options" v-model="value"/>
  </div>
</template>

<script>
import UISelect from './select';
export default {
  components:{UISelect},
  data(){
    return {
       options: [{
          value: 'orderbyTime',
          label: 'Ordered By Time'
        }, {
          value: 'orderbyTimeReverse',
          label: 'Ordered By Time Reverse'
        },{
          value: 'orderbyViewTime',
          label: 'Ordered By view time'
        },
        ],
        value: 'orderbyTime'
    }
  },
  watch:{
    value(newVal){
      switch (newVal) {
        case 'orderbyTimeReverse':
        this.$store.commit('sortByTimeRevese');
          break;
        case 'orderbyTime':
        this.$store.commit('sortByTime');
          break;
        case 'orderbyViewTime':
        this.$store.commit('sortByViewTime');
          break;
      
        default:
          break;
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import "~globalSass";
.filter{
  @include ui-card;
  height: 40px;
  background: #fdfdfd;
  margin-top:-5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
</style>
