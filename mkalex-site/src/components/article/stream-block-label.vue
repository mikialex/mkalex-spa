<template>
  <section class="stream-block-label">
    <div class="stream-block-label-container">
      <time-plate :date="articleInfo.publish_time"></time-plate>
      <div class="down-group">
        <span class="s-b-tag-label">TAGS</span>
        <div class="s-b-tags">
          <div v-for="tag in articleInfo.tags" :key="tag">{{tag}}</div>
          <div v-if="articleInfo.tags.length===0" style="color:#bbb">no tag</div>
        </div>
        <div class="watch"><i class="fa fa-eye"></i> {{articleInfo.page_view}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import timePlate from "./time-plate";
export default {
  components: {
    "time-plate": timePlate
  },
  props: {
    articleInfo: { required: true }
  }
};
</script>


<style lang="scss" scoped>
@import "~globalSass";

.stream-block-label {
  min-width: 120px;
  width: 120px;
  min-height: 300px;
}

.stream-block-label-container {
  width: 80px;
  height: 100%;
  min-height: 300px;
  margin: auto;
  background: #ffffff;
  border: 1px solid #ededed;
  border-top: 0px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
}

.down-group {
  margin-top: 20px;
  color: #666;
  font-family: futura;
}

.s-b-tag-label {
  display: block;
  margin: auto;
  margin-bottom: 10px;
  text-align: center;
  color: #aaa;
}

.s-b-tags {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  > div {
    padding-left: 5px;
    padding-right: 5px;
    font-size: 12px;
    margin: 2px;
    text-align: center;
  }
}

.watch {
  font-size: 13px;
  text-align: center;
}
</style>
