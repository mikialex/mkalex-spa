<template>
  <div class="editor">
    <button class="updator" @click="updateAll">
      Update
    </button>
    <title-part></title-part>
    <nav class="">
      <div @click="backToHome" ><i class="fas fa-arrow-left"></i>
        back</div>
      <div @click="changeTab('content')" :class="{'activeTab':this.currentTab==='content'}"><i class="fas fa-edit"></i>
        content</div>
      <div @click="changeTab('info')" :class="{'activeTab':this.currentTab==='info'}"><i class="fas fa-list-alt"></i>
      info</div>
      <div @click="changeTab('settings')" :class="{'activeTab':this.currentTab==='settings'}"><i class="fas fa-cogs"></i>
      settings</div>
    </nav>

    <trans-fade>
      <section v-show="currentTab==='content'" class="tab-sec">
        <content-editor ></content-editor>
      </section>
    </trans-fade>

   <trans-fade>
      <section  v-if="currentTab==='info'" class="tab-sec">
        <date-input-row :value.sync="createTime" :rowName="'创建时间'" :faClass="'fa-calendar-alt'"></date-input-row>
        <number-input-row :value.sync="pageView" :rowName="'浏览数'" :faClass="'fa-calendar-alt'"></number-input-row>
        <div class="tag-wrap">
          <h4><i class="fas fa-tags"></i>tags</h4>
          <tag-editor :urlname="this.$route.params.u_name" ></tag-editor>
        </div>
      </section>
    </trans-fade>

    <trans-fade>
      <section  v-if="currentTab==='settings'" class="tab-sec">
        <toggle-row :isActive.sync="isActive" :rowName="'是否公开'" :faClass="'fa-eye'"></toggle-row>
        <toggle-row :isActive.sync="hasCover" :rowName="'是否有定制封面图片'" :faClass="'fa-image'"></toggle-row>
        <cover-setting-row v-if="hasCover"></cover-setting-row>
        <toggle-row :isActive.sync="isRecommended" :rowName="'是否列为推荐内容'" :faClass="'fa-thumbs-up'"></toggle-row>
        <select-row :value.sync="contentType" :rowName="'内容分类'" :options="typeOptions" :faClass="'fa-archive'"></select-row>
        <div>
          <h1>DANGER ZONE</h1>
        <el-button size="small" type="danger" @click="deleteIt"> 删除此内容 </el-button>

        </div>
      </section>
    </trans-fade>

  </div>
</template>

<script>
import contentEditor from "./content.vue";
import title from "./title.vue";
import tagEditor from "./tag-editor.vue";
import toggleRow from '../form/row/toggle-row.vue';
import selectRow from '../form/row/select-row.vue';
import dateRow from '../form/row/date-input-row.vue';
import numberRow from '../form/row/number-input-row.vue';
import coverRow from '../form/row/cover-setting-row.vue';

export default {
  name: "editor",
  components: {
    "content-editor": contentEditor,
    'tag-editor':tagEditor,
    "title-part": title,
    'toggle-row':toggleRow,
    'select-row':selectRow,
    'date-input-row':dateRow,
    'number-input-row':numberRow,
    'cover-setting-row':coverRow,
  },
  data() {
    return {
      currentTab: 'content',
      typeOptions:[{
          value: 'article',
          label: 'Article'
        }, {
          value: 'portfolio',
          label: 'Portfolio'
        }],
    };
  },
  computed: {
    createTime:{
      get(){
        return this.$store.state.editor.createTime;
      },
      set(val){
        this.$store.commit('editor/setCreateTime',val)
      }
    },
    pageView:{
      get(){
        return this.$store.state.editor.pageView;
      },
      set(val){
        this.$store.commit('editor/setPageView',val)
      }
    },

    isActive:{
      get(){
        return this.$store.state.editor.isActive;
      },
      set(val){
        this.$store.commit('editor/setIsActive',val)
      }
    },
    hasCover:{
      get(){
        return this.$store.state.editor.hasCover;
      },
      set(val){
        this.$store.commit('editor/setHasCover',val)
      }
    },
    isRecommended:{
      get(){
        return this.$store.state.editor.isRecommended;
      },
      set(val){
        this.$store.commit('editor/setIsRecommended',val)
      }
    },
    contentType:{
      get(){
        return this.$store.state.editor.contentType;
      },
      set(val){
        this.$store.commit('editor/setContentType',val)
      }
    },
    // coverUrl:{
    //   get(){
    //     return this.$store.state.editor.contentType;
    //   },
    //   set(val){
    //     this.$store.commit('editor/setContentType',val)
    //   }
    // }
  },
  mounted() {
    this.$store.dispatch('editor/getEntity',this.$route.params.u_name);
  },
  methods: {
    changeTab(newTab){
      this.currentTab=newTab;
    }, 
    async deleteIt() {
      try {
        result = await this.$confirm('是否确认删除？', '警告', {
          confirmButtonText: '取消',
          cancelButtonText: '删除',
          type: 'warning',
          closeOnPressEscape:false,
          closeOnClickModal:false,
          showClose:false
        })
        const data = await this.$store.dispatch('editor/deleteEntity',this.$route.params.u_name);
        this.$router.push({ name: "home" });
      } catch (error) {
      }
    },
    async updateAll(){
      await this.$store.dispatch('editor/updateEntityInfo');
    },
    backToHome(){
      this.updateAll().then(data=>{
        this.$message({
          type: 'success',
          message: '同步成功!'
        });
        this.$router.push({ name: "home" });
      })
    }
  },
  beforeRouteLeave: function(to, from, next){
    // if(this.$store.state.editor.hasLoaded){
    //   this.$store.dispatch('editor/updateEntityInfo');
    // }
    next(confirm('check before leave'));
    // next(true);
  }
};
</script>

<style lang="scss" scoped>

.editor{
  position: relative;
}

.updator{
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: #fff;
  position: absolute;
  top:0px;
  right: 0px;
}

nav{
  display: flex;
  background:  rgb(248, 248, 248);
  padding: 3px;
  >div{
    padding:5px 10px 5px 10px;
    cursor: pointer;
    border-radius: 3px;
    transition: 200ms;
    &:hover{
      background:#eee;
    }
    &:active{
      background:#ddd;
    }
  }
  >.activeTab{
    background:#fff;
    box-shadow: 0px 2px 0px #eee;
    // color:#fff;
  }
}


.tab-sec{
  padding-top:10px;
}

.tag-wrap{
  h4 {
    margin: 10px;
    > i {
      margin-right: 5px;
    }
  }
}

</style>

