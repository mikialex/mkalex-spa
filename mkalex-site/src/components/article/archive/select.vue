<template>
  <div class="mk-select" >
    <div class="mask" v-if="isActive" @click="close"></div>
    <div class="select-box" @click="open">
      {{currentSelect.label}}
    </div>
    <div
    class="select-panel">
      <div 
      class="select-item"
      v-if="isActive"
      v-for="option in options" 
      :key="option.value"
      @click="switchTo(option.value)"
      >{{option.label}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      required: true
    },
    value: {
      required: true
    }
  },
  model: {
    prop: "value",
    event: "update"
  },
  methods: {
    open() {
      this.isActive = true;
    },
    close() {
      this.isActive = false;
    },
    switchTo(value) {
      this.$emit("update", value);
      this.close();
    }
  },
  computed: {
    currentSelect() {
      for (const option of this.options) {
        if (option.value === this.value) {
          return option;
        }
      }
    }
  },
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style lang="scss" scoped>
.mk-select {
  color: #666;
  font-family: futura;
  font-size: 14px;
  position: relative;
}

.select-panel {
  width: 200px;
  max-height: 200px;
  position: absolute;
  background: #fff;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.select-item {
  width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
}

.select-box {
  width: 200px;
  height: 30px;
  border: 1px solid rgb(186, 186, 186);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
}

.mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
}
</style>

