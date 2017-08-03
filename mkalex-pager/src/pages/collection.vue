<template>
  <section>
    <page-title :title="'Collection'"></page-title>
    <container-mid>
    <under-construction></under-construction>
    </container-mid>
  </section>
</template>

<script>
import undercons from '@/components/underconstruction.vue'
import  PageTitle from '@/components/title/title-main'
export default {
  components:{
    'under-construction':undercons,
    'page-title':PageTitle,
  }
}
</script>


