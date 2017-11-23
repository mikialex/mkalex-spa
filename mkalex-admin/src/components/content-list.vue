<template>
  <ul class="article-ui">
    <h3 v-if="this.type==='article'">ARTICLE LIST</h3>
    <h3 v-if="this.type==='portfolio'">PORTFOLIO LIST</h3>
    <router-link :to="{ name:'editor',params:{u_name:'default',type:'new'} }" tag="li" class="article-li add-article-li">
      <h4>ADD NEW</h4>
    </router-link>
    <li v-for="item in subList" :key="item.urlname" class="article-li">
      <router-link :to="{ name:'editor',params:{u_name:item.urlname,type:'update'} }" tag="h1">
        {{item.title}}
        <span>{{item.urlname}}</span>
      </router-link>
      <h2>{{item.sub_title}}</h2>
      <span>created at: {{item.publish_time}}</span>
      <span>page view: {{item.page_view}}</span>
      <span>usefor: {{item.usefor}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props:['list','type'],
  computed:{
    subList(){
      return this.list.filter((item)=>{
        return item.usefor===this.type
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.add-article-li{
  cursor: pointer;
  transition: 0.5s;
  &:hover{
    background: #efefef;
  }
  &:active{
    transition:0s;
    background: #eee;
    box-shadow: inset 0px 5px 5px 0px rgba(0,0,0,0.1);
  }
}


.article-li{
  list-style: none;
  padding: 10px;
  border: 1px dotted rgba(0,0,0,0.1);
  >h1{
    margin:5px;
    cursor: pointer;
    transition: 0.1s;
    &:hover{
      color:#f45;
      // border-bottom:1px solid #ddd;
    }
    >span{
      color:#aaa;
      font-size: 16px;
    }
  }
  >h2{
    margin:5px;
  }
  >h4{
    text-align: center;
    font-size: 25px;
    color:#aaa;
  }
}


</style>


