<template>
  <div>
    <title-part></title-part>

    <nav class="">
      <div @click="changeTab('content')" :class="{'activeTab':this.currentTab==='content'}">content</div>
      <div @click="changeTab('info')" :class="{'activeTab':this.currentTab==='info'}">info</div>
      <div @click="changeTab('settings')" :class="{'activeTab':this.currentTab==='settings'}">settings</div>
    </nav>

    <section v-if="currentTab==='content'">
      <content-editor :content="content" :urlname="urlname" @contentUpdate="contentUpdate"></content-editor>
    </section>

    <section  v-if="currentTab==='info'">
      <span>创建时间</span><span v-if="isCreateTimeChange">已修改</span>
      <input type="date" v-model="createTime">
      <hr>
      <span>浏览数</span><span v-if="isCreateTimeChange">已修改</span>
      <input type="number" v-model="pageView">
      <hr>  
      <tag-editor :urlname="this.$route.params.u_name" v-if="!isNew"></tag-editor>
    </section>

    <section  v-if="currentTab==='settings'">
      <toggle-row :isActive.sync="isActive" :rowName="'是否公开'" :faClass="'fa-eye'"></toggle-row>
      <toggle-row :isActive.sync="hasCover" :rowName="'是否有定制封面图片'" :faClass="'fa-picture-o'"></toggle-row>
      <toggle-row :isActive.sync="isRecommended" :rowName="'是否列为推荐内容'" :faClass="'fa-thumbs-o-up'"></toggle-row>
      <hr>
      <select v-model="contentType">
        <option disabled value="">请选择类型</option>
        <option>article</option>
        <option>portfolio</option>
      </select>
      <span v-if="isContentTypeChange">已修改</span>

       <div class="operation-part" >
      <button @click="dropChange" class="click-able" v-if="!isNew&&canUpdate" style="color:#f00">DROP CHANGE</button>
      <button @click="updateData" class="click-able" v-if="!isNew&&canUpdate">UPDATE</button>
      <button @click="deleteData" class="click-able" v-if="!isNew" style="color:#f00">DELETE</button>
      <button @click="newData" class="click-able" v-if="isNew&&canPost" >POST</button>
      <button @click="drop" class="click-able" v-if="isNew" style="color:#f00">DROP</button>
    </div>
    </section>


    

  </div>
</template>

<script>
import contentEditor from "./content.vue";
import title from "./title.vue";
import tagEditor from "./tag-editor.vue";
import toggleRow from './toggle-row.vue';

export default {
  name: "editor",
  components: {
    "content-editor": contentEditor,
    'tag-editor':tagEditor,
    "title-part": title,
    'toggle-row':toggleRow,
  },
  data() {
    return {
    };
  },
  computed: {
    canUpdate() {
      if (this.isTitleChange || this.isSubTitleChange || this.isContentTypeChange||
      this.isPageViewChange||this.ishasCoverChange||this.isRecommendedChange||
      this.isContentChange|| this.isCreateTimeChange||this.isActiveChange) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.load();
  },
  methods: {
    gatherValue() {
      return {
        token: this.$store.state.token,
        origin_url: this.$route.params.u_name,
        urlname: this.urlname,
        title: this.title,
        sub_title: this.subTitle,
        content: this.content,
        visit: this.pageView,
        has_cover: this.hasCover,
        create_time: this.createTime,
        is_recommended: this.isRecommended,
        usefor:this.contentType,
        is_active:this.isActive,
      };
    },
    changeTab(newTab){
      this.currentTab=newTab;
    },

    load() {
      if (this.$route.params.type === "update") {
        this.$ajax
          .getAuth(this, this.$ajax.apis.articleDetialAdmin, {
            urlname: this.$route.params.u_name
          })
          .then(data => {
            this.tags=data.tags;
          });
      } else if (this.$route.params.type === "new") {
        this.urlname = "";
        this.title = "";
        this.subTitle = "";
        this.content = "";
      }
    },

    updateData() {
      this.$ajax
        .patch(this, this.$ajax.apis.articleDetial, this.gatherValue())
        .then(data => {
          if (data.result === "success") {
            this.load();
          }
        })
        .catch(this.$ajax.handleErr(this));
    },

    contentUpdate(content) {
      this.content = content;
    },

    deleteData() {
      this.$ajax
        .del(this, this.$ajax.apis.articleDetial, {
          urlname: this.$route.params.u_name,
          token: this.$store.state.token
        })
        .then(data => {
          console.log(data);
          if (data.result === "success") {
            this.$router.push({ name: "home" });
          }
        })
        .catch(this.$ajax.handleErr(this));
    },

    newData() {
      let oldurl = this.urlname;
      this.$ajax
        .post(this, this.$ajax.apis.articleDetial, this.gatherValue())
        .then(data => {
          console.log(data);
          if (data.result === "success") {
            console.log("goto");
            this.$router.push({
              name: "editor",
              params: { u_name: oldurl, type: "update" }
            });
             this.load();
          }
        })
        .catch(this.$ajax.handleErr(this));
    },
    drop() {
      this.$router.push({ name: "home" });
    },
    dropChange() {
      this.urlname=this.old_urlname
      this.title = this.old_title;
      this.subTitle = this.old_subTitle;
      this.content = this.old_content;
      this.createTime = this.old_createTime;
      this.pageView=this.old_pageView
      this.hasCover=this.old_hasCover
      this.isRecommended=this.old_isRecommended
      this.contentType=this.old_contentType
      this.isActive=this.old_isActive
    }
  }
};
</script>

<style lang="scss" scoped>

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

hr{
  border:0.5px solid rgba(0,0,0,0.1)
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

