<template>
  <div class="editor">
    <opration-bar></opration-bar>
    <title-part></title-part>
    <nav class="">
      <div @click="changeTab('content')" :class="{'activeTab':this.currentTab==='content'}"><i class="fas fa-edit"></i>
        content</div>
      <div @click="changeTab('info')" :class="{'activeTab':this.currentTab==='info'}"><i class="fas fa-list-alt"></i>
      info</div>
      <div @click="changeTab('settings')" :class="{'activeTab':this.currentTab==='settings'}"><i class="fas fa-cogs"></i>
      settings</div>
    </nav>

    <trans-fade>
      <section v-if="currentTab==='content'" class="tab-sec">
        <content-editor ></content-editor>
      </section>
    </trans-fade>

   <trans-fade>
      <section  v-if="currentTab==='info'" class="tab-sec">
        <date-input-row :value.sync="createTime" :rowName="'创建时间'" :faClass="'fa-calendar-alt'"></date-input-row>
        <number-input-row :value.sync="pageView" :rowName="'浏览数'" :faClass="'fa-calendar-alt'"></number-input-row>
        <tag-editor :urlname="this.$route.params.u_name" ></tag-editor>
      </section>
    </trans-fade>

    <trans-fade>
      <section  v-if="currentTab==='settings'" class="tab-sec">
        <toggle-row :isActive.sync="isActive" :rowName="'是否公开'" :faClass="'fa-eye'"></toggle-row>
        <toggle-row :isActive.sync="hasCover" :rowName="'是否有定制封面图片'" :faClass="'fa-image'"></toggle-row>
        <cover-setting-row v-if="hasCover"></cover-setting-row>
        <toggle-row :isActive.sync="isRecommended" :rowName="'是否列为推荐内容'" :faClass="'fa-thumbs-up'"></toggle-row>
        <select-row :value.sync="contentType" :rowName="'内容分类'" :options="typeOptions" :faClass="'fa-archive'"></select-row>
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
import oprationBar from './opration-bar.vue';

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
    'opration-bar':oprationBar
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
  }
};
</script>

<style lang="scss" scoped>

.editor{
  margin-top:30px;
}

nav{
  display: flex;
  >div{
    padding:10px;
    cursor: pointer;
  }
  >.activeTab{
    background: #000;
    color:#fff;
  }
}


.tab-sec{
  padding-top:20px;
}

.toggle-row{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:50px;
  padding-left:10px;
  padding-right:10px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  border-top: 1px solid rgba(0,0,0,0.1);
  margin-top:-1px ;
  >span{
    font-size:18px;
  }
}


.title-part {
  > .title-editor {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.05);
    font-size: 30px;
    padding: 10px;
  }
  > .sub-title-editor {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}

.operation-part {
  display: flex;
  height: 60px;
  padding-right: 30px;
  padding-left: 30px;
  align-items: center;
  > button {
    height: 40px;
    margin: 5px;
  }
}

.form-changed {
  // background: rgba(255,150,100,0.1);
  transition: 1s;
  border-right: 10px solid #000 !important;
}

.bounce-enter-active {
  transition: all 0.3s ease-in-out;
}
.bounce-leave-active {
  transition: all 0.3s ease-in-out;
}
.bounce-enter,
.bounce-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
</style>

