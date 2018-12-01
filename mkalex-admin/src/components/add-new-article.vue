<template>
<div>
  <div class="iscreating">
    url of your new content: 
    <el-tooltip class="item" effect="dark" content="not empty and unique" placement="top">
      <input type="text"  spellcheck="false" 
      v-model="newUrlName" placeholder="new urlname">
    </el-tooltip>
    <el-button size="small"  @click="createNew" :disabled="!isNewUrlValid"> create </el-button>
  </div>
</div>

</template>

<script>
export default {
  data(){
    return{
      newUrlName: '',
    }
  },
  methods:{
    async createNew(){
      const data = await this.$store.dispatch('createNewEmptyEntity',
      {urlName: this.newUrlName, type: this.type});
      this.$router.push({ name:'editor',params:{u_name:this.newUrlName} });
    }
  },
  computed: {
    isNewUrlValid(){
      return this.newUrlName!==''&&this.isUnique;
    },
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
}
</style>


