<template>
  <div class="stream-block">
    <stream-block-label :articleInfo="articleInfo" class="inv-7"></stream-block-label>
    <div class="stream-block-text">
      <div class="stream-block-title">
        <h2>{{articleInfo.title}}</h2>
        <h3>{{articleInfo.sub_title}}</h3>
      </div>
      <div class="stream-block-content">
        <markdown-render :content="content" :urlname="articleInfo.urlname"></markdown-render>
        <!-- <div>
          <span>阅读全文</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import label from './stream-block-label'
import markdown from '@/components/markdown-render'
export default {
  props:{
    articleInfo:{
      required:true
    },
  },
  data:function(){
    return {
      content:'loading'
    }
  },
  mounted(){
      this.$ajax.get(this,this.$ajax.apis.articleContent,{urlname:this.articleInfo.urlname})
      .then(data=>{
        this.content=data.content;
        // window.dispatchEvent(new Event('resize'));
        setTimeout(()=>{
          window.dispatchEvent(new Event('resize'));
        }, 100);
      }).catch(this.$ajax.handleErr(this))
  },
  components: {
    'stream-block-label': label,
    'markdown-render':markdown
  },
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

.stream-block-content{
  margin-right: rem(30px);
  margin-left: rem(20px);
}

h2,h3{
  margin-right: rem(15px);
}

h2{
  font-size: rem(30px);
  font-weight: bold;
  margin-bottom: 0px;
}
h3{
  font-size: rem(20px);
  margin-top: 5px;
}

</style>
