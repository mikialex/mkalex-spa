<template>
  <div class="user">
    <img class="avatar"
     @click="active=true"
    src="../assets/avatar.png" alt="">

    <div v-if="active" class="panel">
      <div class="item" @click="logout">
        退出登陆
      </div>

      <div class="item" @click="logout">
        修改密码
      </div>
    </div>

    <div class="mask" v-if="active" @click="active = false"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active: false,
    }
  },
  methods:{
    open(){
      this.active = true;
    },
    logout(){
      this.$router.push({name:'login'})
    },
  }
}
</script>

<style lang="scss" scoped>
.user{
  position: relative;
}

.avatar{
  width: 60px;
  height: 60px;
  border-radius: 30px;
  cursor: pointer;
    box-shadow: inset 0px 2px 0px  rgba(0,0,0,0.5);
  &:hover{
    box-shadow: inset 0px 2px 0px 5px rgba(0,0,0,0.5);
  }
}

.mask{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top:0px;
  left:0px;
}

.panel{
  font-size: 14px;
  color: #444;
  background: #fff;
  position: absolute;
  top: 30px;
  right:30px;
  width: 120px;
  border-radius: 3px;
  box-shadow: 0px 5px 10px 0px  rgba(0,0,0,0.1),0px 3px 5px 0px  rgba(0,0,0,0.1);
  padding-top:3px;
  padding-bottom:3px;
  .item{
    text-align: center;
    padding: 6px;
    cursor: pointer;
    transition: 200ms;
    &:hover{
      background: #eee;
    }
    &:active{
      background: #ddd;
    }
  }
}
</style>

