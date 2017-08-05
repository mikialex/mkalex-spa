<template>
  <div class="portfolio-block">
     <img src="../../assets/defaultPortfolioCover.png">
     <div class="description-constainer">
       <span class="title">The design of mkalex V1 mkalex</span>
       <span class="subTitle">The design o测试文字1 es of mklex</span>
        <div>
          <span> 
            <i class="fa fa-eye"></i>1235
            </span>
          
          <i class="fa fa-calendar"></i></div>
     </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.portfolio-block{
  width:300px;
  height: 310px;
  display: inline-block;
  border:1px solid #f3f3f3;
  background: #fff;
  margin:5px;
  font-family: 'futura';
}

img{
  width:300px;
  height: 200px;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.05);
  // 0px 2px 1px 0px rbga(0,0,0,0.1);
}

.description-constainer{
  padding: 10px;
  padding-top:0px;
  >div{
    display: flex;
    justify-content: space-between;
  }
}

.title{
  display: block;
  width:100%;
  height:40px;
  font-size:18px;
}

.subTitle{
  display: block;
  width:100%;
  height:40px;

  font-size:14px;
  color:#888;
}

</style>