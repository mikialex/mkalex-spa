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
.filter{
  height: 40px;
  background: #fdfdfd;
  border-top:2px solid #fff;
  border-bottom:2px solid #eee;
  margin-top:-5px;
  margin-bottom: 10px;
  border-radius: 3px;
  display: flex;
  align-items: center;
}
</style>
