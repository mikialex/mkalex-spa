<template>
  <container-mid>
    <block-flex :end="true">
      <section class="reader">
        <h1>{{info.title}}</h1>
        <h2>{{info.sub_title}}</h2>
        <markdown-render :content="info.content"></markdown-render>
      </section>
    </block-flex>
  </container-mid>
</template>

<script>
import markdown from '@/components/markdown-render'
export default {
  components:{
    'markdown-render':markdown
  },
  data:function(){
    return{
      info:{},
    }
  },
  mounted(){
    
    this.$ajax.get(this,this.$ajax.apis.articleDetial)
    .then(data=>{
      console.log('get article detail :'+data);
      this.info=data;
    })
    .catch(this.$ajax.handleErr(this))
  }
}
</script>

<style lang="scss" scoped>

.reader{
  margin-top:100px;
}

</style>



