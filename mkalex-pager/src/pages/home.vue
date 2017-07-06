<template>
  <section>
    <container-mid>
      <!--<div style="height:100px;width:100px;background:#777">homepage</div>-->
    </container-mid>
    <webgl-logo></webgl-logo>
    <!--<red-triangular></red-triangular>-->
  </section>
</template>

<script>
import webglLogo from '@/components/homepage/webgl-logo'
import redTriangular from '@/components/homepage/red-triangular'
export default {
  components: {
    'webgl-logo': webglLogo,
    'red-triangular': redTriangular,
  }
}
</script>
