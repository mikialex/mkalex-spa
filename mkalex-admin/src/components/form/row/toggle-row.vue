<template>
  <div class="toggle-row">
    <span>
      <i class="fa" :class="[faClass]"></i>
      {{rowName}}
    </span>
    <mk-toggle :isActive.sync="active"></mk-toggle>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      active:false,
    }
  },
  props:{
    isActive:{
      required:true,
    },
    rowName:{
      default:'default name'
    },
    faClass:{
      default:'fa-picture-o'
    }
  },
  mounted(){
      this.active=this.isActive;
  },
  watch:{
    isActive:function(newStates){
      this.active=newStates;
    },
    active:function(newStates){
      this.$emit('update:isActive', newStates);
    }
  }
}
</script>

<style lang="scss" scoped>

.toggle-row{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:40px;
  padding-left:10px;
  padding-right:10px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  border-top: 1px solid rgba(0,0,0,0.1);
  margin-top:-1px ;
  transition: 200ms;
  &:hover{
    background: rgb(250, 250, 250);
  }
  >span{
    font-size:14px;
  }
}

</style>


