<template>
  <div >
    <div class="nav-all">
      <nav class="content-nav">
        <router-link :to="{name:'article'}" :tag="'div'" :active-class="'current-tab'">文章</router-link>
        <router-link :to="{name:'portfolio'}" :tag="'div'" :active-class="'current-tab'">作品集</router-link>
        <router-link :to="{name:'tag'}" :tag="'div'" :active-class="'current-tab'">标签</router-link>
        <router-link :to="{name:'album'}" :tag="'div'" :active-class="'current-tab'">相册</router-link>
      </nav>

      <userPanel/>
    </div>

    <trans-fade>
      <router-view></router-view>
    </trans-fade>

  </div>
</template>

<script>
import userPanel from './user.vue';
export default {
  components:{userPanel},
  name: "home",
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch('getEntityList');
    this.$store.dispatch('tag/getTags');
  },
};
</script>

<style lang="scss" scoped>

.current-tab{
  background: #000;
  color:#fff;
}

.nav-all{
  display: flex;
  justify-content: space-between;
}

.content-nav{
  display: flex;
  >div{
    cursor: pointer;
    transition: 200ms;
    padding:10px;
    height: 25px;
    &:hover{
      box-shadow: inset 0px -5px 0px 0px #000;
    }
    &:active{
      transition: 0ms;
      background: #000;
      color:#fff;
    }
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
