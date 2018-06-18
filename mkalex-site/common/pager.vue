<template>
  <div class="pager">
    <!-- <span class="switch">pre</span> -->
    <div class="page-group">
      <button v-for="n in listCount" 
      :key="n" 
      class="item"
      :class="{'is-current-page': n - 1 === currentIndex}"
      @click="jumpTo(n)"
      >
      {{n}}
      </button>
    </div>
    <!-- <span class="switch">nex</span> -->
  </div>
</template>

<script>
export default {
  name: "mk-pager",
  props: {
    list: { required: true, default: [] },
    currentIndex: { required: true, default: 0 },
    eachPage: { required: true, default: 5 }
  },
  data() {
    return {};
  },
  computed: {
    listCount() {
      return Math.ceil(this.list.length / this.eachPage);
    }
  },
  methods: {
    jumpTo(n) {
      this.$emit("switchPage", n - 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.pager {
  display: flex;
  justify-content: center;
  align-items: center;
}

.switch {
  font-family: "futura";
  font-size: 20px;
}

.page-group {
  padding-left: 15px;
  padding-right: 15px;
  width:50%;
  display: flex;
  flex-wrap: wrap;
  > .item {
    outline: none;
    width: 30px;
    height: 30px;
    margin: 5px;
    border-radius: 100%;
    border: 0px;
    box-shadow: 0px 2px 2px #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "futura";
    font-size: 14px;
    cursor: pointer;
  }
  > .is-current-page {
    background: #000;
    color: #fff;
  }
}
</style>

