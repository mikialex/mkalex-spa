<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
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
  width: 15px;
  height: 15px;
}

::-webkit-scrollbar-track {
  background-color: #afafaf;
  box-shadow: inset 0px -1px 0px 3px rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 4px 1px 0px rgba(0, 0, 0, 0.1),
  inset 0px 0px 0px 2px rgba(0, 0, 0, 0.1);
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
