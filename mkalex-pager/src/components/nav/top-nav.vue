<template>
  <div style="width:100%;position:fixed;">
    <div class="mk-container" style="margin:auto">
      <nav class="mk-nav-main">
        <section>
          <!--<embed src="{{ static('/image/commen/logo.svg') }}" class="nav-min-logo">
          <embed src="{{ static('/image/commen/slogon.svg') }}" class="nav-min-slogon">-->
          <div class="nav-toggle">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
        <ul>
          <li>
            <a >Home</a>
          </li>
          <li>
            <a >Blog</a>
          </li>
          <li>
            <a >Portfolio</a>
          </li>
          <li>
            <a class="outer-link" target="view_window" >Cheet-sheet</a>
          </li>
          <li>
            <a class="under-construction">Collection</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
        <div>
          <h2 style="display:none">格藝尋道 術設溯淵</h2>
          <div>
            <!--<embed src="{{ static('/image/commen/slogon.svg') }}">-->
          </div>
        </div>
        <!--<script type="text/javascript">
        $(".nav-toggle").on("click", function() {
          var height = $(".mk-nav-main>ul").css("height");
          if (height !== "0px") {
            $(".mk-nav-main>ul").css("height", "0px");
          } else {
            $(".mk-nav-main>ul").css("height", "360px");
          }
          // $(".mk-nav-main>ul").css("height","300px")
        })
        window.onscroll = function() {
          if (document.body.scrollTop > 100) {
            $(".mk-nav-main").css('background-color', "rgba(255, 255, 255, .95)")
            $(".mk-nav-main").css('box-shadow', "0px 2px 10px 0px rgba(0, 0, 0, 0.09)")
          } else if (document.body.scrollTop < 70) {
            $(".mk-nav-main").css('background-color', "rgba(255, 255, 255, 0)")
            $(".mk-nav-main").css('box-shadow', "none")
          }
        }
        </script>-->
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isTop:true,
      downHeight:100,
      upHeight:70,
      navList:[
        {name:'Home',link:'sss',isUnderconstruction:false,isNewWindow:false},
        {name:'Home',link:'sss',isUnderconstruction:false,isNewWindow:false},
        {name:'Home',link:'sss',isUnderconstruction:false,isNewWindow:false},
        {name:'Home',link:'sss',isUnderconstruction:false,isNewWindow:false},
      ]
    }
  },
  methods:{
    handleScroll(){
      if(document.body.scrollTop > this.downHeight){
        this.isTop=false
      }else if(document.body.scrollTop < this.upHeight){
        this.isTop=true
      }
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss">

</style>
