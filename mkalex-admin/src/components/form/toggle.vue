<template>
  <div class="mk-toggle" @click="toggle" :class="{'mk-toggle-active':active}">
    <div class="mk-toggle-block" >
      <template v-if="!active">
       off
      </template>
      <template v-if="active">
       on
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      active:false,
    }
  },
  methods:{
    toggle(){
      this.active=!this.active;
      this.$emit('update:isActive', this.active);
    }
  },
  props:{
    isActive:{
      required:true,
    }
  },
  watch:{
    isActive:function(newStates){
      this.active=newStates;
    }
  }
}
</script>

<style lang="scss" scoped>
.mk-toggle{
  display: inline-block;
  width:50px;
  height: 30px;
  border:1px solid #000;
  border-radius: 20px;
  padding:1px;
  box-sizing: border-box;
  cursor: pointer;
  transition:0.1s;
  &:hover{
    >.mk-toggle-block{
      transform: scale(1.3);
    }
  }
}

.mk-toggle-block{
  width:24px;
  height: 24px;
  background: #fff;
  border:1px solid #000;
  border-radius: 100%;
  transition:0.1s ease-in-out;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.mk-toggle-active{
  background: #000;
  >.mk-toggle-block{
    margin-left:20px;
  }
}


</style>


