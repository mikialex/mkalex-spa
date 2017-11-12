<template>
  <div class="hello">
    <input type="text" v-model="username" placeholder="name">
    <input type="password" v-model="password"  placeholder="password">
    <span >invalid</span>
    <button @click="login" v-if="canLogin">login</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username:'',
      password:'',
    }
  },
  computed:{
    canLogin(){
      return this.username!==''&&this.password!==''
    }
  },
  method:{
    login(){
      this.$ajax.post(this,this.$ajax.apis.login)
      .then(data=>{
        console.log(data);
        
      })
      .catch(this.$ajax.handleErr(this))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
