<template>
  <section>
    <container-mid>
      <div style="height:100px;width:100px;background:#777">homepage</div>
    </container-mid>
    <container-mid>
      <webgl-logo></webgl-logo>
    </container-mid>
  </section>
</template>

<script>
import webglLogo from '@/components/homepage/webgl-logo'
export default {
  components: {
    'webgl-logo': webglLogo,
  }
}
</script>
