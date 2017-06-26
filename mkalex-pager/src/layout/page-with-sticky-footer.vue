<template lang="html">
  <section class="mlayout-page-sticky-footer">
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </section>
</template>

<script>
export default {
  name:'page-sticky-footer'
}
</script>

<style lang="scss" scoped>
.mlayout-page-sticky-footer{
  display: flex;
  min-height: 100vh;//sticky footer
  flex-direction: column;
  margin:0px;
  padding-top: 0px;
  >main{
    flex: 1;
  }
}
</style>
