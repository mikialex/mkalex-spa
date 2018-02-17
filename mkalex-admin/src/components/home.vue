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
      <router-link :to="{name:'article'}" :tag="'div'" :active-class="'current-tab'">文章</router-link>
      <router-link :to="{name:'portfolio'}" :tag="'div'" :active-class="'current-tab'">作品集</router-link>
      <router-link :to="{name:'tag'}" :tag="'div'" :active-class="'current-tab'">标签</router-link>
      <router-link :to="{name:'album'}" :tag="'div'" :active-class="'current-tab'">相册</router-link>
    </nav>
    
    <trans-fade>
      <router-view></router-view>
    </trans-fade>

  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch('getEntityList');
    this.$store.dispatch('tag/getTags');
  },
  methods:{
    logout(){
      this.$router.push({name:'login'})
    },
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



</style>
