<template>
  <li>
    <router-link :to="{ name:link }" 
    :class="{ underConstruction: isUnderconstruction }"
    :active-class="'activeLi'">
      {{name}}
      <i class="fa fa-heart" aria-hidden="true" v-if="love"></i>
      </router-link>

  </li>
</template>

<script>
export default {
  props: {
    isUnderconstruction: {
      type: Boolean,
      default: false,
      required: false,
    },
    love: {
      type: Boolean,
      default: false,
      required: false,
    },
    name: {
      type: String,
      default: 'nameisrequired'
    },
    link:{
      type: String,
      default: '/',
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~globalSass';

.activeLi{
  background-color: #2d2d2d;
  color: #fff;
}

li {
  display: flex;
  align-items: center;
  height: rem(60px); // background-color: #777;
  list-style: none;
  &:first-child {
    >a {
      border-left: 0px;
    }
  }
  >a {
    padding-left: rem(15px);
    padding-right: rem(15px);
    text-decoration: none;
    height: rem(45px);
    width: 100%;
    line-height: rem(45px);
    border-left: $line-border;
    font-weight: 300;
    // font-size: rem(18px);
    color: #303030;
    transition: 0.3s ease-in;
    cursor: pointer;
      @media (max-width: 700px) {
    // width:100%;
    height: rem(60px);
    line-height: rem(60px);
    font-size: rem(20px);
  }
    &:hover {
      @extend .activeLi
    }   
    &:active {
      background-color: #ff1010;
      color: #fff;
      transition: 0s ;
    }
  }
  >.underConstruction {
    color: rgb(182, 182, 182) !important;
  }
  >.outer-link {
    &::after {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 10px 0;
      border-color: transparent #b0b0b0 transparent transparent;
      display: block;
      float: right;
      content: ' ';
      position: relative;
      left: rem(15px);
    }
  }
}
</style>

