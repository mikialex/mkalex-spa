<template>
  <div class="stream-block">
    <stream-block-label></stream-block-label>
    <div class="stream-block-text">
      <div class="stream-block-title">
        <h2>kudshfjsdfhkjfhs</h2>
        <h3>kudshfjsdfhkjfhs</h3>
      </div>
      <div class="stream-block-content">
        <markdown-render></markdown-render>
        <div>
          <span>阅读全文</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import label from './stream-block-label'
import markdown from '@/components/markdown-render'
export default {
  components: {
    'stream-block-label': label,
    'markdown-render':markdown
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.stream-block {
  width: 100%;
  min-height: 300px;
  background: #FCFCFC;
  box-shadow: 0 5px 2px 0 rgba(0, 0, 0, 0.10);
  margin-top: 20px;
  display: flex;
}

.stream-block-text {
  flex-grow: 1;
}

.stream-block-title {
  text-align: right;
  width:100%;
}
</style>
