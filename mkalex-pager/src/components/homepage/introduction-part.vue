<template>
  <section>
    <div class="tran-b">
  
    </div>
    <div class="intro-home">
      <container-mid>
        <block-flex :end="true">
          <div class="back-avatar"></div>
            <div style="margin-top:-500px;z-index:1;">
            <part-title></part-title>
            <div class="slogan">
              <!-- <p>
                Political standpoint: Liberalists, agnosticists,
                classical liberals <br> Support laissez-faire, free trade and globalization.
              </p>
              <p>
                Support super-large cities, nuclear power plants, <br>
                intensive farming, genetically modified crops and all the<br>
                new technology to improve efficiency.
              </p>
              <p>
                Against government expansion, welfarism, and populism.<br>
                Against organic agriculture, extreme environmentalism and <br>
                  “human activities lead to global warming hypothesis.”
              </p> -->
              <p>
                .<br>..<br>......<br>...<br>............<br>.....<br>
                .<br>..<br>.....<br>...<br>.<br>
              </p> 
            </div>
            <div class="whoiam">
              <p>
                I am MK Alex.
              </p>
              <p>
                I am a student in ECUST, major in product design.
              </p>
              <p>
                I focus on Design, Interface technology, and Computer Science.
              </p>
              
            </div>
          </div>
  
        </block-flex>
      </container-mid>
    </div>
  </section>
</template>

<script>
import title from './part-title.vue'
export default {
  components: {
    'part-title': title,
  }
}
</script>


<style lang="scss" scoped>
@import '~globalSass';

// section{
//   position: relative;
//   z-index:2;
// }

.tran-b{
  width: 0;
height: 0;
border-style: solid;
border-width: 200px 0 0 100vw;
border-color: transparent transparent transparent #000;
 margin-top:-80px;
}

.intro-home {
  width: 100%;
  height: 700px;
  background: #000;
  font-family: futura;
  font-weight: bold;
}

.whoiam{
  font-size: rem(16px);
  margin-left:10px;
}

.back-avatar{
    width:500px;
    height:500px;
    background-image: url(../../assets/avatar-back.png);
    background-size:100% 100%;
    opacity: 0.3;

}

section {
  color: #fff;
  position: relative;
  z-index: 10;
  margin-bottom: rem(-110px);
}

.slogan{
  width:100%;
  text-align: right;
  font-size: rem(20px);
  
}
</style>
