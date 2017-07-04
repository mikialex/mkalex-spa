<template>
  <container-mid>
    <nav>
      <div>stream</div>
      <div>archive</div>
    </nav>
  </container-mid>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '~globalSass';
  nav{
    width:100%;
    height:24px;
    display: flex;
    background: #FFFFFF;
    box-shadow: 0 2px 0 0 rgba(0,0,0,0.1);
    margin-top:20px;
    >div{
      height:100%;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size:rem(16px);
      cursor:pointer;
      transition:200ms ease-in-out;
      &:hover{
        background: #444444;
        color:#fff;
        box-shadow: 0 2px 0 0 rgba(0,0,0,0.08);
      }      
      &:active{
        transition:0ms;
        background: #ff3445;
        color:#fff;
        box-shadow: 0 2px 0 0 rgba(0,0,0,0.08);
        transition:0ms;
      }
    }
  }
</style>
