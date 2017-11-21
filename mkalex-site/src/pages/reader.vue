<template>
<div class="reader-back">
  <container-mid>
    <block-flex :end="true">
      <section class="reader">
        <span @click="back"><i class="fa fa-angle-left"></i>返回</span>
        <h1>{{info.title}}</h1>
        <h2>{{info.sub_title}}</h2>
        <markdown-render :content="info.content" :urlname="this.$route.params.u_name"></markdown-render>
      </section>
    </block-flex>
  </container-mid>
</div>
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
  methods:{
    back(){
      window.history.go(-1)
    }
  },
  mounted(){
    
    this.$ajax.get(this,this.$ajax.apis.articleDetial,{urlname:this.$route.params.u_name})
    .then(data=>{
      console.log('get article detail :'+data);
      this.info=data;
    })
    .catch(this.$ajax.handleErr(this))
  }
}
</script>

<style lang="scss" scoped>

.reader-back{
  background: #eee;
}

.reader{
  margin-top:100px;
  background: rgba(255,255,255,0.5);
  padding: 10px;
  >h1{
    font-size:30px;
  }
  >h2{
    font-size:20px;
  }
  >span{
    font-size:20px;
    cursor: pointer;
    &:hover{
      color:red;

    }
  }
}

</style>



