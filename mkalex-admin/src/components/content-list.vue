<template>
  <ul class="article-ui">
    <div class="row">
      <h3 v-if="this.type==='article'">ARTICLE LIST</h3>
      <h3 v-if="this.type==='portfolio'">PORTFOLIO LIST</h3>

      <div>
        <el-button size="small" @click="showList = true" v-if="!showList"> list view </el-button>
        <el-button size="small" @click="showList = false" v-if="showList"> block view </el-button>

        <el-button size="small"  v-if="!showDraftOnly" @click="showDraftOnly = true"> only show draft</el-button>
        <el-button size="small" v-if="showDraftOnly" @click="showDraftOnly = false"> show all</el-button>

        <el-button size="small" type="primary" @click="showAddNew = true" v-if="!showAddNew"> add new </el-button>
        <el-button size="small" type="warning" @click="showAddNew = false" v-if="showAddNew"> cancel </el-button>
      </div>
    </div>

    <addNew v-if="showAddNew"/>

    <list-complete>
      <listItem v-if="showList" v-for="item in subList" :key="item.urlname" :item="item"/>
    </list-complete>
    <list-complete>
      <blockItem v-if="!showList" v-for="item in subList" :key="item.urlname" :item="item" />
    </list-complete>
  </ul>
</template>

<script>
import listItem from './list-content-item';
import blockItem from './block-content-item';
import addNew from './add-new-article';
export default {
  components:{
    listItem, addNew, blockItem
  },
  props:['type'],
  data(){
    return{
      showDraftOnly: false,
      showAddNew: false,
      showList: false,
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

</style>


