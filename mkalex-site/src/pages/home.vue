<template>
  <section>

    <Intro/>

    <Exp/>

    <Col/>

    <Friends/>

  
  </section>
</template>

<script>
import Intro from '../components/homepage/introduction';
import Exp from '../components/homepage/experience';
import Col from '../components/homepage/colum';
import Friends from '../components/homepage/friends';
export default {
  components: {
    Friends, Intro, Exp, Col
  }
}
</script>

<style lang="scss" scoped>

</style>
