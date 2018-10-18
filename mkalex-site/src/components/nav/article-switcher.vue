<template>
  <container-mid>
    <nav>
      <router-link :to="{ name:'articleStream' }"  tag="div"
       :active-class="'activePart'">stream</router-link>
      <router-link :to="{ name:'articleArchive' }"  tag="div"
        :active-class="'activePart'">archive</router-link>
    </nav>
  </container-mid>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.activePart{
  background: #9ea5a2;
  color:#fff;
  box-shadow: 0 2px 0 0 rgba(0,0,0,0.08);
}
  nav{
    @include ui-card;
    overflow: hidden;
    width:100%;
    height:24px;
    display: flex;
    margin-top:20px;
    margin-bottom: 10px;
    >div{
      height:100%;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size:rem(16px);
      font-family: 'futura';
      cursor:pointer;
      transition:200ms ease-in-out;
      &:hover{
        @extend .activePart
      }      
      &:active{
        transition:0ms;
        background: #2f4b4b;
        color:#fff;
        box-shadow: 0 2px 0 0 rgba(0,0,0,0.08);
        transition:0ms;
      }
    }
  }
</style>
