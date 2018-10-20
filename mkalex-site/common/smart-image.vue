<template>
  <div class="smart-image">
    <img :src="src" 
    @load="load" :style="{opacity: hasLoaded?1:0}">
  </div>
</template>

<script>
export default {
  name:"smart-image",
  props:['src'],
  data(){
    return {
      hasLoaded: false
    }
  },
  methods:{
    load(){
      this.hasLoaded = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.smart-image{
  >img{
    width: 100%;
    height: 100%;
    transition: 500ms;
  }
}
</style>

