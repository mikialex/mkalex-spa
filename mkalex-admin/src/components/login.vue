<template>
  <div class="hello">
    <input type="text" v-model="username" placeholder="name">
    <input type="password" v-model="password"  placeholder="password">
    <button @click="login" v-if="canLogin">login</button>
    <span>{{errorMessage}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username:'mkalex',
      password:'mkmkmkmk',
      errorMessage:'',
    }
  },
  computed:{
    canLogin(){
      return this.username!==''&&this.password!==''
    }
  },
  methods:{
    login(){
      this.$ajax.post(this,this.$ajax.apis.login,{username:this.username,password:this.password})
      .then(data=>{
        console.log(data);
        if(data.result==='success'){
          this.$store.commit('setClientToken',{token:data.token})
          this.$router.push({name:'home'})
        }else{
          this.errorMessage=data.message;
        }
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
