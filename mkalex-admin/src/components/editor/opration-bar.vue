<template>
  <div class="opration-bar">
    <div class="model-mask" v-if="warningDelete">
      <div class="delete-confirm">
        <i class="fas fa-exclamation-triangle"></i>确定要删除此内容?
        <div>
          <button @click="deleteData" class="danger">CONFIRM</button>
          <button @click="cancel">CANCEL</button>
        </div>
      </div>
    </div>
    <div class="top-center">
      <div class="group">
        <button @click="backToHome"><i class="fas fa-arrow-left"></i> 
        BACK</button>
        <span class="title">
          TYPEWRITER
        </span>
      </div>
      <div class="group">
        <button @click="updateData" ><i class="fas fa-sync"></i>
        UPDATE</button>
        <button @click="showDeleteWarning" class="danger"><i class="fas fa-trash-alt"></i>
        DELETE</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      warningDelete:false,
    }
  },
  methods: {
    async updateData() {
      await this.$store.dispatch('editor/updateEntityInfo');
    },
    async deleteData() {
      const data = await this.$store.dispatch('editor/deleteEntity',this.$route.params.u_name);
      this.$router.push({ name: "home" });
    },
    showDeleteWarning(){
      this.warningDelete=true;
    },
    cancel(){
      this.warningDelete=false;
    },
    drop() {
      this.$router.push({ name: "home" });
    },
    backToHome(){
      this.$router.push({ name: "home" });
    }
  }
}
</script>
<style lang="scss" scoped>
.opration-bar{
  position:fixed;
  top:0px;
  left:0px;
  width:100%;
  height:50px;
  background: #000;
  >.top-center{
    width: calc(80vw + 60px);
    margin: auto;
    height:50px;
    @media(max-width: 500px) {
      padding: 5px;
      width:95%;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

button{
  border:0px;
  border-radius: 3px;
  height:40px;
  margin:5px;
  background: rgb(48, 48, 48);
  color:#fff;
  font-size: 14px;
  cursor: pointer;
  transition: 200ms;
  &:hover{
    background: rgb(61, 61, 61);
  }
}

.group{
  display: flex;
  align-items: center;
}

.title{
  color: rgb(48, 48, 48);
  text-shadow: 0px 1px 0px rgb(90, 90, 90);
  font-weight:900;
  font-size: 40px;
}

.danger{
  &:hover{
    background: rgb(221, 42, 42);
  }
}

.model-mask{
  width:100vw;
  height:100vh;
  position: fixed;
  z-index: 999;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  >.delete-confirm{
    width:300px;
    height:200px;
    border-radius: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    >i{
      font-size: 50px;
      color:rgb(232, 56, 56);
      margin-bottom:10px;
    }
    >div{
      margin-top:10px;
    }
  }
}
</style>

