<template>
  <div>
    <div class="head-part">
      <div class="head-left">
        <router-link :to="{ name:'home'}"  tag="i"
        class="fa fa-arrow-circle-left click-able" aria-hidden="true"></router-link>
        <h1>EDITOR</h1>
      </div>
      <!-- <span>{{urlname}}</span> -->
      <input type="text" spellcheck="false" v-model="urlname" placeholder="id required">

    </div>

    <div class="title-part">
      <input type="text" class="title-editor" :class="{'form-changed':isTitleChange}" spellcheck="false" placeholder="请输入标题"  v-model="title">
      <span v-if="isTitleChange">标题已修改！</span>
      <input type="text" class="sub-title-editor" :class="{'form-changed':isSubTitleChange}"  spellcheck="false"  placeholder="请输入副标题"    v-model="subTitle">
      <span v-if="isSubTitleChange">副标题已修改！</span>
    </div>

      <span>创建时间</span><span v-if="isCreateTimeChange">已修改</span>
      <input type="date" v-model="createTime">
      <hr>
      <span>浏览数</span><span v-if="isCreateTimeChange">已修改</span>
      <input type="number" v-model="pageView">
      <hr>

      <toggle-row :isActive.sync="hasCover" :rowName="'封面图片'" :faClass="'fa-picture-o'"></toggle-row>

      <toggle-row :isActive.sync="isRecommended" :rowName="'推荐内容'" :faClass="'fa-thumbs-o-up'"></toggle-row>

       <!-- <div class="toggle-row">
        <span>
          <i class="fa fa-thumbs-o-up" ></i>
          推荐内容
        </span>
        <span>
          <i class="fa fa-undo" ></i>
          <mk-toggle :isActive.sync="isRecommended"></mk-toggle>
        </span>
      </div> -->


      <mk-toggle :isActive.sync="isActive"></mk-toggle>公开
      <span v-if="isActiveChange">已修改</span>

      <hr>
      <select v-model="contentType">
        <option disabled value="">请选择类型</option>
        <option>article</option>
        <option>portfolio</option>
      </select>
      <span v-if="isContentTypeChange">已修改</span>


        <!-- <span>更新时间</span>
      <input type="date"> -->


    <!-- <title-part :title="title" :subTitle="subTitle" ></title-part> -->
    <span v-if="isContentChange">内容已修改！</span>
    <content-editor :content="content" :urlname="urlname" @contentUpdate="contentUpdate"></content-editor>

    <tag-editor :urlname="this.$route.params.u_name" v-if="!isNew"></tag-editor>
    
    <div class="operation-part" >
      <button @click="dropChange" class="click-able" v-if="!isNew&&canUpdate" style="color:#f00">DROP CHANGE</button>
      <button @click="updateData" class="click-able" v-if="!isNew&&canUpdate">UPDATE</button>
      <button @click="deleteData" class="click-able" v-if="!isNew" style="color:#f00">DELETE</button>
      <button @click="newData" class="click-able" v-if="isNew&&canPost" >POST</button>
      <button @click="drop" class="click-able" v-if="isNew" style="color:#f00">DROP</button>
    </div>
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
  data: function() {
    return {
      urlname: "loading",
      title: "loading",
      subTitle: "loading",
      urlname: "loading",
      content: "loading",
      createTime:"",
      pageView:'loading',
      hasCover:false,
      isRecommended:false,
      contentType:'article',
      isActive:false,

      tags:[],

      old_urlname: "",
      old_title: "",
      old_subTitle: "",
      old_urlname: "",
      old_content: "",
      old_createTime:'',
      old_pageView:'',
      old_hasCover:false,
      old_isRecommended:false,
      old_contentType:'article',
      old_isActive:false,
    };
  },
  computed: {
    isNew() {
      return this.$route.params.type === "new";
    },
    isTitleChange() {
      return this.old_title !== this.title;
    },
    isSubTitleChange() {
      return this.old_subTitle !== this.subTitle;
    },
    isContentChange() {
      return this.content !== this.old_content;
    },
    isCreateTimeChange(){
      return this.createTime!==this.old_createTime
    },
    isPageViewChange(){
      return this.pageView!==this.old_pageView
    },
    ishasCoverChange(){
      return this.hasCover!==this.old_hasCover
    },
    isRecommendedChange(){
      return this.isRecommended!==this.old_isRecommended
    },
    isContentTypeChange(){
      return this.contentType!==this.old_contentType;
    },
    isActiveChange(){
      return this.isActive!==this.old_isActive;
    },
    canPost() {
      return this.urlname !== "";
    },
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

    load() {
      if (this.$route.params.type === "update") {
        this.$ajax
          .getAuth(this, this.$ajax.apis.articleDetialAdmin, {
            urlname: this.$route.params.u_name
          })
          .then(data => {
            console.log(data);
            this.urlname = data.urlname;
            this.title = data.title;
            this.subTitle = data.sub_title;
            this.content = data.content;
            this.createTime = data.publish_time.substring(0,10);
            this.pageView=data.page_view
            this.hasCover=data.has_cover
            this.isRecommended=data.is_recommended
            this.contentType=data.usefor
            this.isActive=data.is_active

            this.old_urlname = data.urlname;
            this.old_title = data.title;
            this.old_subTitle = data.sub_title;
            this.old_content = data.content;
            this.old_createTime= this.createTime
            this.old_pageView=this.pageView;
            this.old_hasCover= this.hasCover
            this.old_isRecommended=this.isRecommended;
            this.old_contentType= this.contentType
            this.old_isActive=this.isActive

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
  // &:hover{
  //   background: #f5f5f5;
  // }
}

.head-part {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .head-left {
    display: flex;
    align-items: center;
    > i {
      font-size: 36px;
      width: 36px;
      line-height: 36px;
      text-align: center;
      border-radius: 100%;
    }
    > h1 {
      margin-left: 10px;
    }
  }
  > input,
  span {
    font-size: 20px;
    text-align: right;
    border: 0px;
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

