<template>
  <nav>
    <router-link :to="{ name:'home'}"  tag="i"
      class="fa fa-arrow-circle-left click-able" ></router-link>
    <router-link :to="{ name:'home'}"  tag="i"
      class="fa fa-arrow-circle-left click-able" ></router-link>
  </nav>
</template>

<script>
import { baseURL } from '@/api/config'
import axios from 'axios'
export default {
  name: 'side-nav',
  data () {
    return {
    }
  }
}

</script>

<style lang="scss" scoped>


</style>
