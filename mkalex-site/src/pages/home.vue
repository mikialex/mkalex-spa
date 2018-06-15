<template>
  <section>
    <container-mid>
      <block-flex>
      </block-flex>
    </container-mid>
    <container-mid>
      <div class="intro">
        <!-- <trans-splice> -->
          <img src="../assets/avatar-back.png" alt="">
        <!-- </trans-splice> -->
        <div class="intro-text">
        <div style="font-size:20px;">THIS IS THE SPACE FOR MKALEX</div>
        <p>here i write things about technology, design, and my life. and
          its also as my personal portfolio, my project archive. 
          any content should shared, distributed
         with my explicit permission.
        
        </p>
        <p>
          I am interrested in GUI system, 
          computer graphics, CAD, simulation, visulization. with background of art and design.
          I believe the greatest thing came from fusion of art and technology.
        </p>
        <p></p>
        </div>
      </div>
    </container-mid>

    <container-mid>
      <div class="friends">
        <div style="font-size:20px;">
          Friends Link
        </div>
        <ul>
          <li><a target="blank" href="https://lang.doubi.fun/">Angus Lee's Virtual Lab</a></li>
          <li><a target="blank" href="http://aurthur.gitos.cn/">Aurthur</a></li>
          <li><a target="blank" href="https://yisaer.github.io/">Yisaer</a></li>
          <li><a target="blank" href="http://potnote.tk/">Ivan Dart</a></li>
          <li><a target="blank" href="https://puyihua.github.io/">Puyh</a></li>
          <li><a target="blank" href="http://jader.xyz/">Jader's Blog</a></li>
          <li><a target="blank" href="http://inslens.com/Home/index.html">INSLENS DESIGN</a></li>
        </ul>
      </div>
    </container-mid>
    <container-mid>
      <div class="ad">
        <div>
          广告位招租
        </div>
        <div>
          广告位招租
        </div>
        <div>
          广告位招租
        </div>
        <div>
          广告位招租
        </div>
      </div>
    </container-mid>
  </section>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
.intro{
  font-family: futura;
  line-height: 1.5;
  width:100%;
  margin-top:100px;
  display: flex;
  @media(max-width:700px){
    flex-direction: column-reverse;
    >img{
      align-self: center;
      margin-top:50px;
      margin-bottom:50px;
    }
  }
  >img{
    width:300px;
    height:300px;
    min-width:300px;
    min-height:300px;
  }
  >.intro-text{
    padding:20px;
  }
}

.friends{
  font-family: futura;
  font-size:16px;
  width:100%;
  margin-top:20px;
  padding:20px;
  a{
    text-decoration: underline;
    color:#000;
    &:hover{
      color:rgb(176, 35, 35);
    }
  }
  ul{
    text-align: justify;
    padding: 0px;
    >li{
      display: inline-block;
      padding:10px;
    }
  }
}

.ad{
  width:100%;
  margin-top:20px;
  display: flex;
  justify-content: space-around;
  margin-left:-10px;
  margin-right:10px;
  @media(max-width:400px){
    display: none;
  }
  >div{
    width:25%;
    height:300px;
    margin:10px;
    border:1px solid #ddd;
    color:#ddd;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
