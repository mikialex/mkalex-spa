<template>
  <ul class="article-ui">
    <h3 v-if="this.type==='article'">ARTICLE LIST</h3>
    <h3 v-if="this.type==='portfolio'">PORTFOLIO LIST</h3>
    <li class="article-li add-article-li"
      v-if="!isCreating"
      @click="startCreateNew">
      <h4>ADD NEW</h4>
    </li>
    <li class="article-li" v-if="isCreating">
        url of your new content: 
        <input type="text" v-model="newUrlName">
        <button @click="createNew" :disabled="!isNewUrlValid">create</button>
        <button @click="dropNew">drop</button>
    </li>
    <router-link v-for="item in subList" :key="item.urlname" class="article-li" 
    :class="{'draft':!item.is_active}"
    :to="{ name:'editor',params:{u_name:item.urlname} }" tag="li">
      <h1 v-if="item.title!==''">{{item.title}}<span>{{item.urlname}}</span> </h1>
      <h2  v-if="item.sub_title!==''">{{item.sub_title}}</h2>
      <h1 v-if="item.title===''">no title<span>{{item.urlname}}</span> </h1>
      <h2 v-if="item.sub_title===''">no sub title</h2>
      <span>created at: {{item.publish_time}}</span>
      <span>page view: {{item.page_view}}</span>
      <span>usefor: {{item.usefor}}</span>
    </router-link>
  </ul>
</template>

<script>
export default {
  props:['type'],
  data(){
    return{
      isCreating: false,
      newUrlName: ''
    }
  },
  computed:{
    subList(){
      return this.$store.state.entityList.filter((item)=>{
        return item.usefor===this.type
      })
    },
    isNewUrlValid(){
      return this.newUrlName!=='';
    }
  },
  methods:{
    startCreateNew(){
      this.isCreating = true;
    },
    dropNew(){
      this.isCreating = false;
    },
    async createNew(){
      const data = await this.$store.dispatch('createNewEmptyEntity',
      {urlName: this.newUrlName, type: this.type});
      this.$router.push({ name:'editor',params:{u_name:this.newUrlName} });
    }
  }
}
</script>

<style lang="scss" scoped>

.article-ui{
  padding:0px;
}

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
  transition: 0.5s;
  cursor: pointer;
  &:hover{
    background: #efefef;
  }
  >h1{
    margin:5px;
    cursor: pointer;
    transition: 0.1s;
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

.draft{
  color:#888;
}


</style>


