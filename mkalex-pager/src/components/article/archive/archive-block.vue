<template>
  <div class="archive-block">
    <div class="title-section">
      <div class="enter-wrap" @click="gotoReader">
        <span class="main-t">{{articleInfo.title}}</span>
        <h3>{{articleInfo.subTitle}}</h3>
      </div>
      <archive-info></archive-info>
    </div>
    <img src="../../../assets/defaultBlogCover.png" class="inv-7">
  </div>
</template>

<script>
import timePlate from '../time-plate'
import archiveInfo from './archive-info'
export default {
  components:{
    'archive-info':archiveInfo
  },
  props: {
    articleInfo:{required:true},
  },
  methods:{
    gotoReader(){
      this.$router.push({name:'reader',params:{type:'article',u_name:this.articleInfo.u_name}})
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.archive-block {
  width: 100%; // height:150px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FCFCFC;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.06), 0 5px 2px 0 rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  >img {
    min-width: 240px;
    height: 130px;
    border-radius: 5px;
    margin: 10px;
  }
}

.a-b-archive-block {
  margin-left: -20px;
  margin-right: 10px;
}

.title-section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  padding: 10px;
  >.enter-wrap{
    cursor: pointer;
    border:solid 1px #f5f5f5;
    border-radius: 5px;
    transition: 0.5s ease-out;
    &:hover{
      // text-decoration:underline; 
        transition: none;
        border:1px solid #aaa;
        box-shadow: 0px 10px 20px rgba(0,0,0,0.15);
      >.main-t{
        background-image: linear-gradient(#fff 50%, #333 50%);
        color: #000;
        text-shadow:textoutline(1px,#fff);
        // -webkit-text-stroke: 2px black;
      }
      >h3{
        color:#000;
      }
    }
    &:active{
      box-shadow: 0px 10px 20px rgba(0,0,0,0);
      background: #ddd;
    }
  >.main-t {
    transition: 0.5s ease-out;
    margin: 5px;
    margin-bottom: 0px;
    font-size: rem(28px);
    font-weight: bolder;
    background-position: 0 0.8em;
    background-repeat: repeat-x;
    background-size: 2px 10px;
  }

  >h3 {
    transition: 0.5s ease-out;
    margin: 5px;
    margin-top: 10px;
    padding-left:10px;
    font-size: rem(20px);
    font-weight:500;
    color:#777;
    background-position: 0 1.375rem;
    background-size: 1px 1px;
  }
  }
}

</style>
