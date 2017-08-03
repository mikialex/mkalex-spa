<template>
  <section>
    <div>
      <time-plate></time-plate>
      <span>其他</span>
      <span>分类</span>
      <div>
        <ul>
          <li>ccc</li>
          <li>ccc</li>
        </ul>
        <span>标签</span>
      </div>
      <span>阅读:123</span>
  
    </div>
  </section>
</template>

<script>
import timePlate from './time-plate'
export default {
  components: {
    'time-plate': timePlate
  },
}
</script>


<style lang="scss" scoped>
@import '~globalSass';

section {
  min-width: 120px;
  width: 120px;
  min-height: 300px;
  >div {
    width: 80px;
    height: 100%;
    min-height: 300px;
    margin: auto;
    background: #FFFFFF;
    border: 1px solid #EDEDED;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:10px;
    padding-bottom:10px;
  }
}
</style>
