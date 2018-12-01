<template>
  <div class="block" >
    <router-link class="paper" :to="{ name:'editor',params:{u_name:item.urlname} }" tag="div">
      <div class="cover-pic"  v-if="item.has_cover">
        <img :src="imgsrc" alt="">
      </div>

      <div  v-if="!item.has_cover">
        
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
    }
  },
}
</script>

<style lang="scss" scoped>
.block{
  display: inline-flex;
  flex-direction: column;
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
  background: url('./book.svg');
  border-radius: 3px;
  box-shadow: 0px 3px 2px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: 200ms;
  &:hover{
    transform: translateY(5px);
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
  >img{
    display: block;
    height:130px;
  }
  
}
</style>
