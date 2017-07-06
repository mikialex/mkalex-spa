<template>
  <section>
    <page-title :title="'Article'"></page-title>
    <article-switcher></article-switcher>
    <!--<container-mid>
      <div style="height:100px;width:100px;background:#777">aricle</div>
    </container-mid>-->
    <container-mid>
      <router-view></router-view>
    </container-mid>
  </section>
</template>

<script>
import  PageTitle from '@/components/title/title-main'
import webglLogo from '@/components/homepage/webgl-logo'
import switcher from '@/components/nav/article-switcher'
export default {
  components: {
    'webgl-logo': webglLogo,
    'page-title':PageTitle,
    'article-switcher':switcher,
  }
}
</script>
