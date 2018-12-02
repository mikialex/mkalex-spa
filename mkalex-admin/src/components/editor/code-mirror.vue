<template>
  <div id="mirror-container">
   <div id="mirror">
     <!-- edit content here -->
   </div>
  </div>
</template>

<script>
import CodeMirror from 'codemirror/lib/codemirror'   // CodeMirror，必要
import 'codemirror/lib/codemirror.css'    // css，必要
import 'codemirror/theme/base16-light.css'    // css，必要
import 'codemirror/mode/markdown/markdown'  // 语法高亮，自行替换为你需要的语言

var mirrorEditor;

export default {
  props: ['content'],
  mounted() {
    mirrorEditor = CodeMirror(this.$el.querySelector('#mirror'), {
      value: '',
      mode:  "markdown",
      lineWrapping: true,
      lineNumbers: false,
      inputStyle: "contenteditable",
      theme: 'base16-light',
    });

    mirrorEditor.on('change', (instance, change)=>{
      this.$emit('change', instance.getValue());
    })
  },
  watch: {
    content(value){
      mirrorEditor.setValue(value);
      if(!this.hasGetContent){
        let oldC = mirrorEditor.getCursor();
        mirrorEditor.setCursor(oldC);
        this.hasGetContent = true;
      }
    }
  },
  data(){
    return {
      hasGetContent: false
    }
  }
}
</script>

<style lang="scss" >
.CodeMirror{
  height: auto;
}
</style>


