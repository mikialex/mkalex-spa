<template>
  <div id="app">
    <div class="center-wrap">
      <trans-fade>
        <router-view> </router-view>
      </trans-fade>
    </div>
    <scroll-to-top></scroll-to-top>
    <div class="background-footer">
      <div class="grident-mask"></div>
      <img src="static/background.jpg" alt="">
    </div>

    <div class="blank-footer">

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted(){
    this.$store.commit('setClientToken',{token:localStorage.getItem('token')})
  },
  computed:{
    isLogin(){
      return this.$route.name==='login'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

.background-footer{
  width: 100vw;
  position: fixed;
  bottom: -10px;
  z-index: -1;
  opacity: 0.8;
  >.grident-mask{
    width: 100vw;
    height: 200px;
    background: linear-gradient(#eee, rgba(#eee, 0));
    position: absolute;
  }
  >img{
  width: 100vw;
  }
}

.blank-footer{
  height: 300px;
}


.center-wrap {
  width: 80vw;
  margin: auto;
  margin-top: 20px;
  background:rgba(255,255,255,0.8);
  padding:15px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.01);
  @media(max-width: 500px) {
    padding: 5px;
    width:95%;
  }
}

.absolut-base{
  position: relative;
  width: 80vw;
  margin: auto;
}

body{
  background: #eee;
  margin:0px;
}

input , button{
  outline: none;
}

::selection {
  color: #ffffff;
  background-color: rgb(65, 104, 128);
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background-color: #f6f6f6;
  box-shadow: inset 0px -0.5px 0px 3px rgba(0, 0, 0, 0.05);
}

::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.05);
  // inset 0px 0px 0px 2px rgba(0, 0, 0, 0.05);
}

.click-able{
    border:1px solid rgba(0,0,0,0.1);
    background: #fff;
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.1);
    border-radius:5px;
    font-size:15px;
    font-weight: bold;
    transition: 0.2s;
    cursor: pointer;
    &:hover{
      box-shadow: 0px 4px 2px 0px rgba(0,0,0,0.1);
      background: #eee;
    }
    &:active{
      box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.1);
      background: #ddd;
    }
}

</style>
