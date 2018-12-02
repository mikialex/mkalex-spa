<template>
  <button class="updator" @click="click" >
    Update
  </button>
</template>

<script>
export default {
  methods:{
    click(){
      this.$emit('click');
    }
  }
}
</script>


<style lang="scss" scoped>
.updator{
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: #fff;
  position: absolute;
  top:0px;
  right: 0px;
  cursor: pointer;
  font-size: 20px;
  font-family: futura;
  transition: 200ms;
  color: rgb(45, 164, 177);
  background: rgb(229, 250, 249);
  border: solid 3px rgb(172, 237, 203);
  box-shadow: 0px 4px 5px rgb(141, 204, 240);
  &:hover{
    transform: scale(0.95);
  }
  &:active{
    transform: scale(0.85);
  }
}
</style>
