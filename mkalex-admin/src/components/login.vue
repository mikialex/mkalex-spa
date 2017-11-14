<template>
  <div class="login">
    <div class="up-part">
      <input type="text" v-model="username" spellcheck="false" >
    </div>
    <div class="down-part">
      <input type="password" v-model="password" >
    </div>
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

<style lang="scss" scoped>

.up-part{
  width:100vw;
  height: 50vh;
  background: #fff;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  >input{
    margin-bottom:10px;
    background: #000;
    color:#fff;
    &:hover{
      // transform: translateY(-10px);
    }
  }
}

.down-part{
  width:100vw;
  height: 50vh;
  background-image: linear-gradient(0deg, rgba(0,0,0,0.00) 0%, #000000 100%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  >input{
    margin-top:10px;
    &:hover{
      // transform: translateY(10px);
    }
  }
}

input{
  border:0px;
  height: 40px;
  width:240px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  font-size:24px;
  text-align: center;
  transition: 1s;
}

</style>
