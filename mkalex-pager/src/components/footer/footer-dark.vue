<template>
  <footer class="mk-footer">
    <div class="">
      <div class="mk-footer-left">
        <ul>
          <li>
            <a href="#">浏览设置</a>
          </li>
          <li>
            <a href="#">FRIENDS</a>
          </li>
        </ul>
      </div>
      <div class="mk-footer-center">
        <span class="mk-footer-design-note">Originally designed by mkalex</span>
        <div class="">
          <div></div>
          <div></div>
        </div>
        <img src="../../assets/logowhite.svg" width="65" height="65">
        <span class="mk-footer-copyright">©
          <span>2017</span> miki alex. All rights reserved. </span>
        <span class="mk-footer-beian" onclick="window.open('http://http://www.miibeian.gov.cn/','_blank')">沪ICP备16038028号</span>
      </div>
      <div class="mk-footer-right">
        <ul>
          <li>
            <a href="#">版权声明</a>
          </li>
          <li>
            <a href="#">联系方式</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '~globalSass';
.mk-footer {
  width: 100%;
  height: 225px;
  background-color: #000;
  font-weight: 300;
  color: #848484;
  margin-top: rem(100px);
  >div {
    max-width: rem(1200px);
    margin: auto;
    display: flex;
    align-items: center;
    height: 100%;
    >div {
      display: flex;
      align-items: center;
      height: 100%;
      flex-grow: 1;
      >ul {
        display: flex;
        list-style: none;
        width: 100%;
        padding: 0px;
        @extend .cd-8;
        justify-content: center;
        >li {
          flex-grow: 1;
          >a {
            text-decoration: none;
            white-space: nowrap;
            color: #848484;
            height: 50px;
            flex-grow: 1;
            display: flex;
            justify-content: center;
            transition: 0.3s ease-out;
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
    >.mk-footer-left {
      position: relative;
      top: -5px;
      @media (max-width: 500px) {
        left:rem(30px);
      }
    }
    >.mk-footer-right {
      position: relative;
      top: -5px;
      @media (max-width: 500px) {
        right:rem(30px);
      }
    }
    >.mk-footer-center {
      flex-direction: column;
      flex-shrink: 1;
      >.mk-footer-design-note {
        font-family: bigCaslon;
        font-size: rem(16px);
        color: #fff;
        height: 50px;
        line-height: 50px;
        white-space: nowrap;
      }
      >div {
        width: 100%;
        position: relative;
        top: 45px;
        >div {
          width: 30%;
          border-bottom: solid 1px rgb(52, 52, 52);
        }
         :last-child {
          float: right;
        }
      }
      >img {
        margin-top: 10px;
      }
      >.mk-footer-copyright {
        transition: 0.3s ease-out;
        font-size: rem(14px);
        text-align: center;
        margin-top: 25px;
        &:hover {
          color: #fff;
        }
        cursor: pointer;
        >span {
          font-family: bigCaslon;
        }
      }
      >.mk-footer-beian {
        transition: 0.3s ease-out;
        font-size: rem(14px);
        margin-top: 5px;
        &:hover {
          color: #fff;
        }
        cursor: pointer;
      }
    }
  }
}
</style>

