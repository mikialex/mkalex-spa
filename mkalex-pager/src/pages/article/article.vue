<template>
  <section>
    <page-title :title="'Article'"></page-title>
    <container-mid>
      <div style="height:100px;width:100px;background:#777">aricle</div>
    </container-mid>
    <container-mid>
      <router-view></router-view>
    </container-mid>
  </section>
</template>

<script>
import  PageTitle from '@/components/title/title-main'
import webglLogo from '@/components/homepage/webgl-logo'
export default {
  components: {
    'webgl-logo': webglLogo,
    'page-title':PageTitle,
  }
}
</script>
