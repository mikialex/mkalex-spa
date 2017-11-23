<template>
  <div class="ar-info">
    <i class="fa fa-calendar ar-info-cal"></i>{{articleInfo.publish_time}}  
    <div class="ar-info-pv">
      <i class="fa fa-eye"></i>{{articleInfo.page_view}}
    </div>
    <div class="ar-info-tags">
      <span v-for="tag in articleInfo.tags" :key="tag">{{tag}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articleInfo:{required:true},
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
  margin-left:10px;
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
    margin-left:5px;
    color:#444;
  }
}
</style>
