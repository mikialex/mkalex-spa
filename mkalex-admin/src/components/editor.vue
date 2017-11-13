<template>
  <div>
    <h1>EDITOR</h1>
    <span>{{urlname}}</span>
    <textarea v-model="content"></textarea>

    <button @click="postData">change</button>
  </div>
</template>

<script>
export default {
  name: 'editor',
  data:function(){
    return {
      urlname:'loading',
      title:'loading',
      subTitle:'loading',
      urlname:'loading',
      content:'loading',
    }
  },
  mounted(){
    this.$ajax.get(this,this.$ajax.apis.articleDetial,{urlname:this.$route.params.u_name})
    .then(data=>{
      console.log(data);
      this.urlname=data.urlname;
      this.title=data.title;
      this.subTitle=data.sub_title;
      this.content=data.content;
    })
  },
  methods:{
    postData(){
      
    },
  }
}
</script>

<style>

</style>
