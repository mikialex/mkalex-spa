<template>
  <div>
    <input  type="text" v-model="username">
    <input :class="{'error-swing': showError}" type="password" v-model="password">
    <div class="but-group">
      <div class="login center" @click="login">
        <span>
          sign in
        </span>
      </div>
      <div class="sign-up center">
        <span>
          signup
        </span>
      </div>
    </div>
    <!-- <span  v-if="showError" class="error">{{errorMessage}}</span> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: ""
    };
  },
  computed: {
    canLogin() {
      return this.username !== "" && this.password !== "";
    },
    showError() {
      return this.errorMessage !== "";
    }
  },
  methods: {
    async login() {
      try {
        if(!this.canLogin){
          throw 'not valid';
        }
        await this.$store.dispatch("login", {
          username: this.username,
          password: this.password
        });
        this.$router.push({ name: "home" });
      } catch (error) {
        console.error(error);
        this.errorMessage = error;
        setTimeout(() => {
          this.errorMessage = "";
        }, 200);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  font-family: futura;
  font-size: 18px;
  padding-left: 5px;
  display: block;
  width: 200px;
  height: 35px;
  margin: 15px;
  border: 0px;
  border-radius: 3px;
  text-align: center;
  transition: 200ms;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.but-group {
  display: flex;
  margin: 15px;
  color: #fff;
  cursor: pointer;
}

.login {
  background-color: #8bc943;
  width: 122px;
  height: 38px;
  border-radius: 3px 0px 0px 3px;
  > span {
    position: relative;
    top: -2px;
  }
  &:hover {
    background-color: rgb(159, 224, 86);
  }
  &:active {
    background-color: rgb(122, 180, 56);
  }
}

.error-swing {
  animation-duration: 100ms;
  animation-name: err;
  animation-iteration-count: infinite;
  position:relative;
  animation-direction: alternate;
}
@keyframes err {
  from {
    left:-5px;
  }
  to {
    left:5px;
  }
}


.error{
  color: rgb(75, 112, 232);
  background: #fff;
  padding:5px;
  margin:15px;
  border-radius:10px;
}

.sign-up {
  background-color: #579410;
  width: 85px;
  height: 38px;
  border-radius: 0px 3px 3px 0px;
  color: #1f490c;
  > span {
    position: relative;
    top: -2px;
  }
}
</style>

