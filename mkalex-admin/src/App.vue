<template>
  <div id="app">
    <div class="center-wrap" v-if="!hideCenter">
      <trans-fade>
        <router-view> </router-view>
      </trans-fade>
    </div>

    <router-view name="blank"> </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted(){
    this.$store.commit('setClientToken',{token:localStorage.getItem('token')})
  },
  computed:{
    hideCenter(){
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


.center-wrap {
  width: 80vw;
  margin: auto;
  background: #fefefe;
  padding:30px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.01);
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
  color: #FFFFFF;
  background-color: rgb(210, 63, 63);
  border-radius: 10px;
}

::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

// ::-webkit-scrollbar-track {
//   background-color: #afafaf;
//   box-shadow: inset 0px -1px 0px 3px rgba(0, 0, 0, 0.1);
// }

// ::-webkit-scrollbar-thumb {
//   background-color: #fff;
//   border-radius: 2px;
//   box-shadow: 0px 4px 1px 0px rgba(0, 0, 0, 0.1),
//   inset 0px 0px 0px 2px rgba(0, 0, 0, 0.1);
// }


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
