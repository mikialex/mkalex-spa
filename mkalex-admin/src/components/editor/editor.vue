<template>
  <div class="">
    <div class="center-wrap" >

      <div class="head-part">
        <div class="head-left">
          <router-link :to="{ name:'home'}"  tag="i"
          class="fa fa-arrow-circle-left click-able" aria-hidden="true"></router-link>
          <h1>EDITOR</h1>
        </div>
        <span>{{urlname}}</span>
        <!-- <input type="text" spellcheck="false" v-model="urlname"> -->
      </div>

      <div class="title-part">
        <input type="text" class="title-editor" spellcheck="false" placeholder="请输入标题"  v-model="title">
        <input type="text" class="sub-title-editor" spellcheck="false"  placeholder="请输入副标题"    v-model="subTitle">
      </div>

      <content-editor :content="content" @contentUpdate="contentUpdate"></content-editor>


      <div class="operation-part" >
        <button @click="postData" class="click-able">UPDATE</button>
        <button @click="postData" class="click-able" style="color:#f00">DELETE</button>
      </div>
    </div>
  </div>
</template>

<script>
import contentEditor from "./content.vue";

export default {
  name: "editor",
  components: {
    "content-editor": contentEditor
  },
  data: function() {
    return {
      urlname: "loading",
      title: "loading",
      subTitle: "loading",
      urlname: "loading",
      content: "loading"
    };
  },
  mounted() {
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
      });
  },
  methods: {
    postData() {
      let data={
          urlname: this.urlname,
          title: this.title,
          sub_title: this.subTitle,
          content:this.content,
          visit: 100,
          has_cover: false,
          create_time: "2017-1-2",
          is_recommended: false
        }
        console.log(data);

      this.$ajax
        .patch(this, this.$ajax.apis.articleDetial, data)
        .then(data => {
          console.log(data);
        });
    },
    contentUpdate(content) {
      this.content = content;
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
    >i{
      font-size: 36px;
      width:36px;
      text-align: center;
      border-radius: 100%;
    }
    >h1{
      margin-left:10px;
    }
  }
  > input ,span {
    font-size: 20px;
    text-align: right;
    border:0px;
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
  >button{
    height:40px;
    margin:5px;
  }
}


</style>

