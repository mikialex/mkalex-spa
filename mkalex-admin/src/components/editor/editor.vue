<template>

  <transition name="bounce" >
    <div class="center-wrap" >

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
        <input type="text" class="sub-title-editor" :class="{'form-changed':isSubTitleChange}"  spellcheck="false"  placeholder="请输入副标题"    v-model="subTitle">
      </div>

      <!-- <title-part :title="title" :subTitle="subTitle" ></title-part> -->

      <content-editor :content="content" @contentUpdate="contentUpdate"></content-editor>


      <div class="operation-part" >
        <button @click="dropChange" class="click-able" v-if="!isNew&&canUpdate" style="color:#f00">DROP CHANGE</button>
        <button @click="updateData" class="click-able" v-if="!isNew&&canUpdate">UPDATE</button>
        <button @click="deleteData" class="click-able" v-if="!isNew" style="color:#f00">DELETE</button>
        <button @click="newData" class="click-able" v-if="isNew" >POST</button>
        <button @click="drop" class="click-able" v-if="isNew" style="color:#f00">DROP</button>
      </div>
    </div>
    </transition>
</template>

<script>
import contentEditor from "./content.vue";
import title from "./title.vue";

export default {
  name: "editor",
  components: {
    "content-editor": contentEditor,
    "title-part":title,
  },
  data: function() {
    return {
      urlname: "loading",
      title: "loading",
      subTitle: "loading",
      urlname: "loading",
      content: "loading",


      old_urlname: "loading",
      old_title: "loading",
      old_subTitle: "loading",
      old_urlname: "loading",
      old_content: "loading",
    };
  },
  computed: {
    isNew() {
      return this.$route.params.type === "new";
    },
    isTitleChange(){
      return this.old_title !== this.title;
    },
    isSubTitleChange(){
      return this.old_subTitle !== this.subTitle;
    },
    isContentChange(){
      return this.content !== this.old_content;
    },
    canUpdate(){
      if(this.isTitleChange||this.isSubTitleChange||this.isContentChange){
        return true;
      }else{return false}
    }
  },
  mounted() {
    if (this.$route.params.type === "update") {
      this.$ajax
        .get(this, this.$ajax.apis.articleDetial, {
          urlname: this.$route.params.u_name
        })
        .then(data => {
          console.log(data);
          this.urlname = data.urlname;
          this.title = data.title;
          this.subTitle = data.sub_title;
          this.content = data.content;
          this.old_urlname = data.urlname;
          this.old_title = data.title;
          this.old_subTitle = data.sub_title;
          this.old_content = data.content;
        });
    } else if (this.$route.params.type === "new") {
      this.urlname = "";
      this.title = "";
      this.subTitle = "";
      this.content = "";
    }
  },
  methods: {
    gatherValue() {
      return {
        origin_url: this.$route.params.u_name,
        urlname: this.urlname,
        title: this.title,
        sub_title: this.subTitle,
        content: this.content,
        visit: 100,
        has_cover: false,
        create_time: "2017-1-2",
        is_recommended: false
      };
    },

    updateData() {
      this.$ajax
        .patch(this, this.$ajax.apis.articleDetial, this.gatherValue())
        .then(data => {
          if(data.result==='success'){
            this.old_urlname=this.urlname;
            this.old_title=this.title;
            this.old_subTitle=this.subTitle;
            this.old_content=this.content;
          }
        });
    },

    contentUpdate(content) {
      this.content = content;
    },

    deleteData() {
      this.$ajax
        .del(this, this.$ajax.apis.articleDetial, {
          urlname: this.$route.params.u_name
        })
        .then(data => {
          console.log(data);
          if(data.result==='success'){
            this.$router.push({name:'home'})
          }
        });
    },

    newData() {
      console.log(this.gatherValue())
      let oldurl=this.urlname
      this.$ajax
        .post(this, this.$ajax.apis.articleDetial, this.gatherValue())
        .then(data => {
          if(data.result==='success'){
            console.log('goto')
            this.$router.push({name:'editor',params:{u_name:oldurl,type:'update'}})
          }
        });
    },
    drop() {
      this.$router.push({ name: "home" });
    },
    dropChange(){
      this.title=this.old_title;
      this.subTitle=this.old_subTitle;
      this.content=this.old_content;
    }
  }
};
</script>

<style lang="scss" scoped>
.center-wrap {
  width: 80vw;
  margin: auto;
  background: #fefefe;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.01);
  position: absolute;
}

.head-part {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;
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
  padding-left: 30px;
  padding-right: 30px;
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

.form-changed{
  // background: rgba(255,150,100,0.1);
  transition:1s ;
  border-right:10px solid #000 !important;
}



.bounce-enter-active {
  transition: all 0.3s ease-in-out
}
.bounce-leave-active {
  transition: all 0.3s ease-in-out
}
.bounce-enter, .bounce-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(200px);
  opacity: 0;
}


</style>

