<template lang="html">
  <div class="mlayout-container-mid">
      <slot>

      </slot>
  </div>
</template>

<script>
export default {
  name:'container-mid'
}
</script>

<style lang="scss" scoped>

@import '~globalSass';
$desktop-min-width:1000px;
.mlayout-container-mid{
    display: flex;
    width: rem($desktop-min-width);
    margin: auto;
    justify-content: center;
    flex-grow: 1;
    @media (max-width: $desktop-min-width) {
        width:90%;
    }
    @media (max-width: 600px) {
        width:100%;
    }
}

</style>
