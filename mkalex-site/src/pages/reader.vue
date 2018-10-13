<template>
<div class="reader-back">
  <container-mid>
    <block-flex :end="true">
      <section class="reader">
        <h1>{{info.title}}</h1>
        <h2>{{info.sub_title}}</h2>
        <hr>
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
  border-top: 2px solid #fff;
  background: rgba(255,255,255,0.5);
  padding: 10px;
  @media (min-width: 500px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  >h1{
    font-size:30px;
    font-family: futura;
    color: rgb(72, 117, 133);
    text-align: center;
    margin-top:20px;
    margin-bottom: 0px;
  }
  >h2{
    font-size:20px;
    font-family: futura;
    color: #444;
    text-align: center;
    margin-bottom: 20px;
  }
  >hr{
    border:1px solid #ddd;
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



