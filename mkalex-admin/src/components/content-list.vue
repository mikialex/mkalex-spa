<template>
  <ul class="article-ui">
    <div class="row">
      <h3 v-if="this.type==='article'">ARTICLE LIST</h3>
      <h3 v-if="this.type==='portfolio'">PORTFOLIO LIST</h3>

      <div>
        <el-button size="small"  v-if="!showDraftOnly" @click="showDraftOnly = true"> only show draft</el-button>
        <el-button size="small" v-if="showDraftOnly" @click="showDraftOnly = false"> show all</el-button>
      </div>
    </div>

    <li class="article-li add-article-li"
      v-if="!isCreating"
      @click="startCreateNew">
      <h4>ADD NEW</h4>
    </li>

    <li class="article-li iscreating" v-if="isCreating">
        url of your new content: 
        <el-tooltip class="item" effect="dark" content="not empty and unique" placement="top">
          <input type="text"  spellcheck="false" 
          v-model="newUrlName" placeholder="new urlname">
        </el-tooltip>
        <button @click="createNew" :disabled="!isNewUrlValid">create</button>
        <button @click="dropNew">drop</button>
    </li>

    <list-complete>
      <router-link v-for="item in subList" :key="item.urlname" class="article-li" 
      :class="{'draft':!item.is_active}"
      :to="{ name:'editor',params:{u_name:item.urlname} }" tag="li">
        <h1 v-if="item.title!==''">{{item.title}}<span>{{item.urlname}}</span> </h1>
        <h2 v-if="item.sub_title!==''">{{item.sub_title}}</h2>
        <h1 v-if="item.title===''">no title<span>{{item.urlname}}</span> </h1>
        <h2 v-if="item.sub_title===''">no sub title</h2>
        <span>created at: {{item.publish_time}}</span>
        <span>page view: {{item.page_view}}</span>
      </router-link>
    </list-complete>
  </ul>
</template>

<script>
export default {
  props:['type'],
  data(){
    return{
      isCreating: false,
      newUrlName: '',
      showDraftOnly: false
    }
  },
  computed:{
    subList(){
      let list =  this.$store.state.entityList.filter((item)=>{
        return item.usefor===this.type;
      });
      if(this.showDraftOnly){
        list = list.filter(item=>{
            return item.is_active !== true;
        })
      }
      return list;
    },
    isNewUrlValid(){
      return this.newUrlName!==''&&this.isUnique;
    },
    isUnique(){
      let found = false;
      this.$store.state.entityList.forEach((item)=>{
        if(item.urlname === this.newUrlName){
          found = true;
        }
      })
      return !found;
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
  >.row{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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

.iscreating{
  min-height:50px;
  font-size: 18px;
  input{
    border: 0px;
    font-size: 18px;
    &:focus{
      border-bottom:solid 2px rgb(53, 53, 53);
    }
  }
 button{
  border:0px;
  border-radius: 3px;
  height:40px;
  margin:5px;
  background: rgb(48, 48, 48);
  color:#fff;
  font-size: 14px;
  cursor: pointer;
  transition: 200ms;
  &:hover{
    background: rgb(61, 61, 61);
  }
  &[disabled]{
    opacity: 0.5;
  }
}
}

.article-li{
  list-style: none;
  padding: 3px;
  border: 1px dotted rgba(0,0,0,0.1);
  transition: 0.5s;
  font-size: 12px;
  cursor: pointer;
  &:hover{
    background: #efefef;
  }
  >h1{
    margin:5px;
    cursor: pointer;
    transition: 0.1s;
    font-size: 18px;
    >span{
      color:#aaa;
      font-size: 12px;
    }
  }
  >h2{
    margin:5px;
    font-size: 14px;
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


