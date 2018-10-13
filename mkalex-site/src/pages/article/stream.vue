<template>
  <div class="a-str">
    <stream-container :detailList="this.$store.state.articles.detailList"></stream-container>
    <router-link :to="{ name:'articleArchive' }"  tag="div" class="a-str-footer"
       >去 Archive 查看更多历史内容</router-link>
  </div>
</template>

<script>
import container from '@/components/article/stream-container.vue'
export default {
  components:{
    'stream-container':container,
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.a-str{
  width:100%;
}


.a-str-footer{
  width:100%;
  text-align: center;
  color:#bbb;
  font-size:18px;
  margin-top:50px;
  transition: 1s;
  cursor: pointer;
  padding:5px;
  &:hover{
    color:#000;
    background: #eee;
  }
  &:active{
    color:#000;
    background: #ddd;
    transition: 0s;
  }
}
  
</style>
