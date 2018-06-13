<template>
  <section >
    <div v-html="parsedContent" class="md-section">
      
    </div>
  </section>
</template>

<script>
// import {markdown} from 'markdown';
import 'highlight.js/styles/rainbow.css';
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
      marked.setOptions({
        highlight: function (code) {
          return require('highlight.js').highlightAuto(code).value;
        }
      });
      if(this.renderType==='normal'){
        let urlbase=process.env.STATIC_ROOT + "image/" ;
        // let urlbase=process.env.STATIC_ROOT+'image/content/'+this.urlname+'/'
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
  max-width:100%;
  // width:500px;

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

  pre{
    white-space: pre-wrap; 
 word-wrap: break-word; 
  }

  a{
    text-decoration: underline;
    color:#000;
    &:hover{
      color:rgb(176, 35, 35);
    }
  }

}


  
</style>
