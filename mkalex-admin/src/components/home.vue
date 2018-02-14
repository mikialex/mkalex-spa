<template>
  <div >
    <div class="home-head">
      <h1>HOME</h1>
      <span>
        Hello miki !
        <span class="log-out" @click="logout">退出登陆</span>
      </span>
    </div>

    <nav class="content-nav">
      <div @click="changeNav('article')" :class="{'current-tab':this.currentNav==='article'}">文章</div>
      <div @click="changeNav('portfolio')" :class="{'current-tab':this.currentNav==='portfolio'}">作品集</div>
      <div @click="changeNav('tag')" :class="{'current-tab':this.currentNav==='tag'}">标签</div>
    </nav>
    <trans-fade>
      <content-list :type="'article'" v-if="this.currentNav==='article'"></content-list>
      <content-list :type="'portfolio'"  v-if="this.currentNav==='portfolio'"></content-list>
      <div class="tags" v-if="this.currentNav==='tag'">
        <h3>TAGS GROUP</h3>
        <div class="tags-container">
          <span v-for="tag in tagList" :key="tag.tag_name">{{tag.tag_name}}
            <i class="fa fa-trash-o" @click="deleteTag(tag.tag_name)"></i>
          </span>
        </div>
        <input type="text" v-model="newTagName"> <button v-if="canAddNew" @click="addNewtag">add</button>
      </div>
    </trans-fade>
  </div>
</template>

<script>
import list from './content-list.vue'
export default {
  name: "home",
  components:{
    'content-list':list,
  },
  data() {
    return {
      currentNav:'article',
      newTagName:'',
    };
  },
  mounted() {
    this.$store.dispatch('getEntityList');
    this.$store.dispatch('tag/getTags');
  },
  computed:{
    tagList() {
      return this.$store.state.tag.tagList;
    },
    canAddNew(){
      let find=false;
      this.tagList.forEach(tag => {
        if(tag.tag_name===this.newTagName){
          find=true;
        }
      });
      return this.newTagName!==''&&!find;
    }
  },
  methods:{
    logout(){
      this.$router.push({name:'login'})
    },
    changeNav(newTab){
      this.currentNav=newTab;
    },
    addNewtag(){
      this.$store.dispatch('tag/addNewTags', this.newTagName);
    },
    deleteTag(tagName){
      this.$store.dispatch('tag/deleteTags', tagName);
    }

  }
};
</script>

<style lang="scss" scoped>

.log-out{
  cursor: pointer;
  &:hover{
    font-weight: 900;
  }
}

.current-tab{
  background: #000;
  color:#fff;
}

.content-nav{
  display: flex;
  >div{
    cursor: pointer;
    padding:10px;
  }
}

.center-wrap {
  width: 80vw;
  margin: auto;
  background: #fefefe;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.01);
  padding-right: 30px;
  padding-left: 30px;
}

.home-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  > i {
    font-size: 28px;
    width: 36px;
    line-height:36px;
    text-align: center;
    border-radius: 100%;
    margin-right:20px;
  }
}


.tags{
  >.tags-container{
    border: 1px dotted rgba(0,0,0,0.1);
    padding:10px;
    line-height: 20px;
    >span{
      background: #000;
      color:#fff;
      display: inline-block;
      border-radius:3px;
      padding: 5px;
      margin:5px;
      >i{
        cursor: pointer;
        &:hover{
          color:#f45;
        }
      }
    }
  }
}


</style>
