<template>
  <div class="login" :class="{'login-error':showError}"> 
    <div class="up-part">
      <input type="text" v-model="username" spellcheck="false" >
    </div>
    <div class="down-part">
      <input type="password" v-model="password" >
      <div class="login-button" @click="login" v-if="canLogin"></div>
    </div>
  </div>
</template>

<script>
import { baseURL } from '@/api/config'
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      username:'',
      password:'',
      errorMessage:'',
    }
  },
  computed:{
    canLogin(){
      return this.username!==''&&this.password!==''
    },
    showError(){
      return this.errorMessage!==''
    }
  },
  mounted(){
    this.$store.commit('clearToken')
  },
  methods:{
    login(){

      this.$store.commit('add_GoingAjax')
      axios.post(baseURL + this.$ajax.apis.login, {username:this.username,password:this.password})
          .then(d => {
            let data=d.data;
            this.$store.commit('minus_GoingAjax')
             console.log(data);
            if(data.result==='success'){
              this.$store.commit('setClientToken',{token:data.token})
              this.$router.push({name:'home'})
            }else{
              this.errorMessage=data.message;
              setTimeout(()=>{
              this.errorMessage='';
              },1000)
            }
          })
      .catch(this.$ajax.handleErr(this))
    }
  }
}
</script>

<style lang="scss" scoped>

.login{
  background: #fff;
  transition: 1s;
}

.login-error{
  background: #f00;
}

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
  align-items: center;
  flex-direction: column ;
  // justify-content: space-between;
  >input{
    margin-top:10px;
    &:hover{
      // transform: translateY(10px);
    }
  }
}

.login-button{
  width:240px;
  height: 40px;
  /* Rectangle 13: */
background-image: linear-gradient(0deg, rgba(104,104,104,0.00) 0%, rgba(103,103,103,0.08) 38%, rgba(102,102,102,0.45) 73%, #646464 100%);
  margin-top:10px;
  transition: 0.2s;
  cursor: pointer;
  &:hover{
    height: 80px;    
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
