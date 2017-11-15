<template>
  <transition name="bounce">
    <div class="center-wrap">
      <div class="home-head">
        <i class="fa fa-check-circle-o click-able" aria-hidden="true" @click="logout"></i>
        <h1>HOME</h1>
      </div>
      <ul class="article-ui">
        <h3>ARTICLE LIST</h3>
        <li v-for="item in list" :key="item.urlname" class="article-li">
          <router-link :to="{ name:'editor',params:{u_name:item.urlname,type:'update'} }" tag="h1">
            {{item.title}}
            <span>{{item.urlname}}</span>
          </router-link>
          <h2>{{item.sub_title}}</h2>
          <span>created at: {{item.publish_time}}</span>
          <span>page view: {{item.page_view}}</span>
        </li>
        <router-link :to="{ name:'editor',params:{u_name:'default',type:'new'} }" tag="li" class="article-li add-article-li">
          <h4>ADD NEW</h4>
        </router-link>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  name: "home",
  data: function() {
    return {
      list: []
    };
  },
  mounted() {
    this.$ajax.get(this, this.$ajax.apis.articleList).then(data => {
      console.info("get article list :", data);
      this.list = data;
    });
  },
  methods:{
    logout(){
      this.$router.push({name:'login'})
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

.home-head {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;
  > i {
    font-size: 28px;
    width: 36px;
    line-height:36px;
    text-align: center;
    border-radius: 100%;
    margin-right:20px;
  }
}

.article-ui{
  padding:30px;
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

.article-li{
  list-style: none;
  padding: 10px;
  border: 1px dotted rgba(0,0,0,0.1);
  >h1{
    margin:5px;
    cursor: pointer;
    transition: 0.1s;
    &:hover{
      color:#f45;
      // border-bottom:1px solid #ddd;
    }
    >span{
      color:#aaa;
      font-size: 16px;
    }
  }
  >h2{
    margin:5px;
  }
  >h4{
    text-align: center;
    font-size: 25px;
    color:#aaa;
  }
}

.bounce-enter-active {
  transition: all 0.3s ease-in-out
}
.bounce-leave-active {
  transition: all 0.3s ease-in-out
}
.bounce-enter, .bounce-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: scale(0.1);
  opacity: 0;
}

</style>
