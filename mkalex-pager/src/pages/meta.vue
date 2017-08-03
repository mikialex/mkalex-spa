<template>
  <container-mid>
    
    <block-flex :end="true">
    <page-title :title="'Meta'"></page-title>
    <div class="mk-resume-block">
      <h2>Work exprience</h2>
      <ul>
        <li class="m-r-b-titles">
          <div>
            <div>
              <h3>上海必乾信息科技</h3>
              <h4>Shanghai BQTECH</h4>
            </div>
            <span>（September 2016 －Current）</span>
          </div>
          <ul>
            <li>
              product design
            </li>
            <li>
              visual design
            </li>
            <li>
              FrontEnd dev
            </li>
          </ul>
        </li>
      </ul>
    </div>
  
    <div class="mk-resume-block">
      <h2>Education</h2>
      <ul>
        <li class="m-r-b-titles">
          <div>
            <div>
              <h3>華東理工大學</h3>
              <h4>ECUST</h4>
            </div>
            <span>（September 2014 －Current）</span>
          </div>
          <ul>
            <li>
              product design
            </li>
          </ul>
        </li>
      </ul>
    </div>
  
    <div class="mk-resume-block">
      <h2>Achievements</h2>
      <ul>
        <li class="m-r-b-details">
          <div>
            <div>
              <h3>Piclass</h3>
              <h4>online education system</h4>
            </div>
            <a href="http://www.piclass.cn">www.piclass.cn</a>
          </div>
          <p>
            前端的入门项目，曾作为学校大创参加上海市计算机竞赛获得一等奖，参加全国计算机大赛获得二等奖。 在该项目中，首次使用自研UI框架，首次进行前端工程化实践，首次作为产品上线
          </p>
        </li>
        <li class="m-r-b-details">
          <div>
            <div>
              <h3>Qpen</h3>
              <h4>online math homework system</h4>
            </div>
            <a href="http://demo-s.bqteam.com">demo-s.bqteam.com</a>
          </div>
          <p>
            开发的首个SPA应用，是我所在创业公司产品的web前端版本。使用Vue2 vue-router2 vuex2 ，通过这个项目， 对前端组件化的趋势 方法 和实践 有了深入认识，对es2015等下一代语言标准有了深入接触。收获了丰富的前端开发经验
          </p>
        </li>
      </ul>
    </div>
    </block-flex>
  </container-mid>
</template>

<script>
import  PageTitle from '@/components/title/title-main'
export default {
  components: {
    'page-title':PageTitle,
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.mk-resume-block {
  width: 100%;
  >h2 {
    font-size: rem(36px);
    font-weight: 100;
    color: #c6c6c6;
    margin-top: rem(60px);
    margin-bottom: rem(0px);
    @media(max-width: 800px) {
      font-weight: 300;
    }
  }
  >ul {
    list-style: none;
    padding-left: 0px;
  }
}


.m-r-b-titles {
  // background-color: #fff;
  padding: rem(10px);
  margin-bottom: rem(20px);
  margin-right: rem(10px);
  @media(max-width: 800px) {
    border-left: 2px solid rgb(218, 218, 218);
  }
  >div {
    padding-left: rem(20px);
    padding-right: rem(40px);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    @media(max-width: 800px) {
      flex-direction: column;
      align-items: flex-end;
      padding: 0px;
      margin-left: rem(10px);
    }
    >div {
      display: flex;
      align-items: baseline;
      @media(max-width: 800px) {
        width:100%;
        justify-content: space-between;
      }
      >h3 {
        //<h3>上海必乾信息科技</h3>
        font-size: rem(18px);
        margin: 0px;
      }
      >h4 {
        //<h4>Shanghai BQTECH</h4>
        font-size: rem(18px);
        font-weight: 300;
        margin: 0px;
        padding-left: rem(20px);
        padding-right: rem(20px);
        @media(max-width: 800px) {
          display: none;
        }
      }
    }
    >span {
      font-size: rem(16px);
      margin-top: rem(10px);
      color: rgb(152, 152, 152);
      font-weight: 300;
      @media(max-width: 500px) {
        font-size: rem(16px);
      }
    }
  }
  >ul {
    list-style: none;
    margin-top: rem(10px);
    display: flex;
    @media(max-width: 800px) {
      flex-direction: column;
      padding-left: 0px;
    }
    >li {
      //product design
      padding-left: rem(20px);
      padding-right: rem(20px);
      font-size: rem(16px);
      @media(max-width: 800px) {
        text-align: right;
      }
    }
  }
}

.m-r-b-details {
  // background-color: #fff;
  padding: rem(10px);
  margin-bottom: rem(20px);
  margin-right: rem(10px);
  @media(max-width: 800px) {
    border-left: 2px solid rgb(218, 218, 218);
  }
  >div {
    padding-left: rem(20px);
    padding-right: rem(40px);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    @media(max-width: 800px) {
      flex-direction: column;
      align-items: flex-end;
      padding: 0px;
      margin-left: rem(10px);
    }
    >div {
      display: flex;
      align-items: baseline;
      @media(max-width: 800px) {
        width:100%;
        flex-direction: column;
        ;
      }
      >h3 {
        font-size: rem(18px);
        margin: 0px;
      }
      >h4 {
        font-size: rem(18px);
        font-weight: 300;
        margin: 0px;
        padding-left: rem(20px);
        padding-right: rem(20px);
        @media(max-width: 500px) {
          font-size: rem(16px);
        }
      }
    }
    >a {
      font-size: rem(18px);
      color: rgb(139, 60, 60);
      font-weight: 300;
      @media(max-width: 500px) {
        font-size: rem(16px);
      }
    }
  }
  >p {
    padding-left: rem(40px);
    padding-right: rem(40px);
    font-size: rem(14px);
    color: rgb(85, 85, 85);
    font-weight: 300;
    @media(max-width: 800px) {
      padding:rem(10px);
      padding-right: 0px;
    }
  }
}
</style>
