<template>
  <div class="portfolio-block" @click="goto">
     <img src="../../assets/defaultPortfolioCover.png"  v-if="!portfolioInfo.has_cover">
     <img :src="imgsrc" alt="" v-if="portfolioInfo.has_cover">
     <div class="description-constainer">
       <span class="title">{{portfolioInfo.title}}</span>
       <span class="subTitle">{{portfolioInfo.sub_title}}</span>
        <div>
          <span> 
            <i class="fa fa-eye"></i>{{portfolioInfo.page_view}}
            </span>
          <span>
            {{portfolioInfo.publish_time}}
          <i class="fa fa-calendar"></i>
          </span>
          </div>
     </div>
  </div>
</template>

<script>
export default {
  props: {
    portfolioInfo: { require: true }
  },
  computed:{
    imgsrc(){
      return process.env.STATIC_ROOT + "image/" + this.portfolioInfo.cover_url ;
      // return process.env.STATIC_ROOT+'image/content/'+this.portfolioInfo.urlname+'/cover.png';
    }
  },
  methods:{
    goto(){
      this.$router.push({name:'reader',params:{type:'portfolio',u_name:this.portfolioInfo.urlname}})
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~globalSass";

.portfolio-block {
  width: 300px;
  height: 310px;
  display: inline-block;
  border: 1px solid #f3f3f3;
  background: #fff;
  margin: 5px;
  font-family: "futura";
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover{
    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
  }&:active{
    box-shadow: 0px 0px 0px rgba(0,0,0,0.1)
  }
}

img {
  width: 300px;
  height: 200px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);
  // 0px 2px 1px 0px rbga(0,0,0,0.1);
}

.description-constainer {
  padding: 10px;
  padding-top: 0px;
  > div {
    display: flex;
    justify-content: space-between;
  }
}

.title {
  display: block;
  width: 100%;
  height: 40px;
  font-size: 18px;
  margin-top: 10px;
}

.subTitle {
  display: block;
  width: 100%;
  height: 30px;

  font-size: 14px;
  color: #888;
}
</style>