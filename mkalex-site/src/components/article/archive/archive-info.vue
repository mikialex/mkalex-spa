<template>
  <div class="ar-info">
    <div class="ar-left-info">
      <i class="fa fa-calendar ar-info-cal"></i>{{articleInfo.publish_time}}  
      <div class="ar-info-pv">
        <i class="fa fa-eye"></i>
        {{articleInfo.page_view}}
      </div>
    </div>
    <div class="ar-info-tags">
      <span v-for="tag in articleInfo.tags" :key="tag">{{tag}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articleInfo: { required: true }
  }
};
</script>

<style lang="scss" scoped>
@import "~globalSass";

.ar-info {
  font-size: 12px;
  width: 100%;
  height: 30px;
  background: #fbfbfb;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 3px;
  box-sizing: border-box;
  border-radius: 3px;
}

.ar-left-info {
  display: flex;
  color: #888;
}

.ar-info-cal {
  padding-right: 10px;
}

.ar-info-pv {
  margin-left: 10px;
  margin-right: 10px;
}

.ar-info-tags {
  flex-grow: 1;
  text-align: right;
  max-width: 200px;
  overflow: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  > span {
    padding: 3px;
    border-radius: 5px;
    margin-left: 5px;
    color: #888;
  }
}
</style>
