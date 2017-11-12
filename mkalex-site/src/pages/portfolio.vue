<template>
  <section>
    <page-title :title="'Portfolio'" :subTitle="'Showcase For My Creative Work'"></page-title>
    <container-mid>
      <portfolio-container></portfolio-container> 
    </container-mid>
  </section>
</template>

<script>
import  PageTitle from '@/components/title/title-main'
import Container from '@/components/portfolio/container'
export default {
  components: {
    'page-title':PageTitle,
    'portfolio-container':Container,
  }
}
</script>

<style>
  
</style>
