<template>
  <div class="block" >
    <router-link class="paper" :to="{ name:'editor',params:{u_name:item.urlname} }" tag="div">
      <div class="cover-pic"  v-if="item.has_cover">
        <img :src="imgsrc" alt="">
      </div>

      <div  v-if="!item.has_cover">
        <span class="cover-char">{{coverChar}}</span>
        <!-- <span v-for="tag in item.tags" :key="tag">{{tag}}</span> -->
      </div>

    </router-link>
    <div class="title">
      {{item.title}}</div>
  </div>
</template>

<script>
export default {
  props:['item'],
  computed: {
    imgsrc() {
      return process.env.STATIC_ROOT + "image/" + this.item.cover_url;
    },
    coverChar(){
      return this.item.title.trimStart()[0].toUpperCase();
    }
  },
}
</script>

<style lang="scss" scoped>
.block{
  display: inline-block;
  transition: 1000ms;
  align-items: center;
  overflow: hidden;
  width: 150px;
  height: 220px;
  margin: 0px;
  font-size: 12px;
}

.paper{
  width: 100px;
  height: 150px;
  background: #fefefe;
  border-radius: 3px;
  box-shadow: 
  0px -1px 0px #fff,
  0px 3px 2px rgba(0,0,0,0.1),
  inset 1px 0px 0px rgba(0,0,0,0.1),
  inset 0px -10px 0px rgba(0,0,0,0.1),
  inset 0px -7px 0px rgba(0,0,0,0.05),
  inset 0px -3px 0px rgba(0,0,0,0.05);
  cursor: pointer;
  transition: 200ms ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    transform: translateY(5px);
  }
  &:active{
    transform: scale(0.95);
  }
}

.title{
  margin-top:10px;
  width: 120px;
  text-align: center;
}

.cover-pic{
  width:99px;
  overflow: hidden;
  border-radius: 3px 3px 0px 0px;
  align-self: flex-start;
  >img{
    display: block;
    height:130px;
  }
  
}

.cover-char{
  display: block;
  font-size: 48px;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  position:relative;
  top: -10px;
  color: #eee;
  text-shadow: 0px -1px 0px #ccc;
}
</style>
