<template>
  <li 
  @mouseenter="isHover = true"
  @mouseleave="isHover = false"
  >
    
    <router-link :to="{ name:link }" v-if="!outerLink"
    :class="{ underConstruction: isUnderconstruction }"
    :active-class="'activeLi'"
    :style="{background: isHover||isActive?color: ''}"
    >
      {{name}}
      <i class="fa fa-heart" aria-hidden="true" v-if="love"></i>
    </router-link>

      <a :href="link" target="_blank" v-if="outerLink"
      :style="{background: isHover||isActive?color: ''}"
      >{{name}}</a>

  </li>
</template>

<script>
import {randomIntergerBetween, getRandomDarkColor} from '../../util/color';

export default {
  data(){
    return {
      color: getRandomDarkColor(),
      isHover:false
    }
  },
  computed:{
    isActive(){
      return this.$route.matched.find(mat=>{
        return mat.name===this.link;
      })!==undefined;
    }
  },
  props: {
    isUnderconstruction: {
      type: Boolean,
      default: false,
      required: false
    },
    love: {
      type: Boolean,
      default: false,
      required: false
    },
    name: {
      type: String,
      default: "nameisrequired"
    },
    link: {
      type: String,
      default: "/"
    },
    outerLink: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~globalSass";

.activeLi {
  color: #fff;
}

li {
  display: flex;
  align-items: center;
  height: rem(60px); // background-color: #777;
  list-style: none;
  > a {
    padding-left: rem(10px);
    padding-right: rem(10px);
    text-decoration: none;
    height: rem(45px);
    width: 100%;
    line-height: rem(45px);
    border-left: $line-border;
    font-weight: 300;
    font-size: rem(16px);
    color: #444;
    transition: 0.3s ease-in;
    cursor: pointer;
    @media (max-width: 700px) {
      // width:100%;
      height: rem(60px);
      line-height: rem(60px);
    }
    &:hover {
      @extend .activeLi;
    }
    &:active {
      color: #fff;
      transition: 0s;
    }
  }
  > .underConstruction {
    color: rgb(182, 182, 182) !important;
  }
  > .outer-link {
    &::after {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 10px 0;
      border-color: transparent #b0b0b0 transparent transparent;
      display: block;
      float: right;
      content: " ";
      position: relative;
      left: rem(15px);
    }
  }
}
</style>

