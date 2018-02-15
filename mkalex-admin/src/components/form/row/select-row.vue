<template>
<div class="select-row">
  <span>
    <i class="fa" :class="[faClass]"></i>
    {{rowName}}
  </span>
  <el-select class="select" v-model="inner_value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</div>
</template>

<script>
export default {
  props:{
    value:{
      required:true,
    },
    options:{
      required:true,
    },
    rowName:{
      default:'default name'
    },
    faClass:{
      default:'fa-picture-o'
    }
  },
  data() {
    return {
      inner_value:''
    }
  },
  mounted(){
    this.inner_value=this.value;
  },
  watch:{
    value:function(newStates){
      this.inner_value=newStates;
    },
    inner_value:function(newStates){
      this.$emit('update:value', newStates);
    }
  }
}
</script>

<style lang="scss" scoped>

.select-row{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:50px;
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
    font-size:16px;
  }
}

.select{
  width:150px;
}

</style>


