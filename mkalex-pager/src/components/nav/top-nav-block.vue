<template>
  <li>
    <a :class="{ underConstruction: isUnderconstruction }">{{name}}</a>
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
    name: {
      type: String,
      default: 'nameisrequired'
    }
  }
}
</script>

<style lang="scss" scope>
@import '~globalSass';
li {
  display: flex;
  align-items: center;
  height: rem(60px); // background-color: #777;
  list-style: none;
  @media (max-width: 700px) {
    // width:100%;
  }
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
    color: #303030;
    transition: 0.3s ease-in;
    &:hover {
      background-color: #2d2d2d;
      color: #fff;
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

