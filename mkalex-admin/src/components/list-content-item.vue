<template>
  <router-link class="article-li" 
  :class="{'draft':!item.is_active}"
  :to="{ name:'editor',params:{u_name:item.urlname} }" tag="li">
    <h1 v-if="item.title!==''">{{item.title}}</h1>
    <!-- <h2 v-if="item.sub_title!==''">{{item.sub_title}}</h2>
    <h1 v-if="item.title===''">no title<span>{{item.urlname}}</span> </h1>
    <h2 v-if="item.sub_title===''">no sub title</h2> -->
    <!-- <span>created at: {{item.publish_time}}</span>
    <span>page view: {{item.page_view}}</span> -->
  </router-link>
</template>

<script>
export default {
  props:['item']
}
</script>

<style lang="scss" scoped>
.article-li{
  list-style: none;
  padding: 3px;
  transition: 0.5s;
  font-size: 12px;
  cursor: pointer;
  &:hover{
    background: #efefef;
  }
  >h1{
    margin:5px;
    font-weight: 300;
    cursor: pointer;
    transition: 0.1s;
    font-size: 16px;
  }
}

.draft{
  color:#888;
}

</style>
