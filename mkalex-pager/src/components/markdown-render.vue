<template>
  <section v-html="parsedContent">
  </section>
</template>

<script>
import {markdown} from 'markdown';
export default {
  props:{
    content:{
      default:'default markdown content',
    },
    renderType:{
      default:'normal'//
    }
  },
  data(){
    return {
      // parsedContent:'',
    }
  },
  mounted(){
  },
  computed:{
    parsedContent(){
      if(this.renderType==='normal'){
        return markdown.toHTML(this.content)
      }
    }
  }
}
</script>

<style>
  
</style>
