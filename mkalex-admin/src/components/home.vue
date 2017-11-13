<template>
  <div>
    <h1>HOME</h1>
    <ul>
      <li v-for="item in list" :key="item.urlname">
        <router-link :to="{ name:'editor',params:{u_name:item.urlname} }" >{{item.urlname}}</router-link>
        <span>{{item.title}}</span>
        <span style="color:#999">{{item.sub_title}}</span><br>
        <span>{{item.page_view}}</span>
        <span>{{item.publish_time}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data:function(){
    return {
      list:[]
    }
  },
  mounted(){
    this.$ajax.get(this,this.$ajax.apis.articleList)
    .then(data=>{
      console.info('get article list :',data);
      this.list=data;
    })
  }
}
</script>

<style>

</style>
