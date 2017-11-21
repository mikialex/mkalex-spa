<template>
  <section >
    <div v-html="parsedContent" class="md-section">
      
    </div>
  </section>
</template>

<script>
// import {markdown} from 'markdown';
var marked = require('marked');
export default {
  props:{
    content:{
      default:'default markdown content', 
    },
    renderType:{
      default:'normal'//
    },
    urlname:{required:true}
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
        let urlbase='/static/image/content/'+this.urlname+'/'
        let p=this.content.replace(/{#base#}/g,urlbase)
        return marked(p)
      }
    }
  }
}
</script>

<style lang="scss">
@import '~globalSass';

.md-section{
  width:100%;

  p{
    color:#444;
    line-height: 1.5;
    text-align: justify;
  }
   img{
    max-width: 100%;
    margin:auto;
    text-align: center;
  }  

}


  
</style>
