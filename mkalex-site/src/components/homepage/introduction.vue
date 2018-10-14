<template>
  <container-mid>

    <div class="intro" >
      <div class="sep">

        <transition name="upshow">
          <img src="../../assets/avatar-back.png" class="size" v-if="show1">
        </transition>
        <div v-if="!show1" class="size"></div>

        <transition name="upshow">
          <p v-if="show2" class="size"
          >Here i write things about technology, design, and my life. this site
            is also as my personal portfolio, my project archive. 
            any content should shared, distributed
            with my explicit permission.
          </p>
        </transition>
        <div v-if="!show2" class="size"></div>
      </div>
      <div class="sep">

        <transition name="upshow">
          <p v-if="show3" class="size">
            I am interested in GUI system, 
            computer graphics, CAD, simulation, visulization, procedural aesthetics. 
            With the background of art and design.
            I believe the greatest thing came from fusion of art and technology.
          </p>
        </transition>
        <div v-if="!show3" class="size"></div>

        <transition name="upshow">
          <p  v-if="show4" class="size">
            Best wishes for every visitor, may you find some useful reference, enthusiasm
            about magic fields, and the beauty and happyness of plain daily life.
          </p>
        </transition>

        <div v-if="!show4" class="size"></div>
      </div>
    </div>

  </container-mid>
</template>

<script>
async function wait(time){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    }, time);
  })
}

export default {
  data(){
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
    }
  },
  async mounted(){
    this.show1=true;
    await wait(100);
    this.show2=true;
    await wait(100);
    this.show3=true;
    await wait(100);
    this.show4=true;
  }
}
</script>


<style lang="scss" scoped>
.upshow-enter-active,  {
  transition: all 0.4s ease-out;
}
.upshow-enter, .upshow-leave-active {
  opacity: 0;
  transform: translateY(30px);
}

.intro{
  margin-top:100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;  
  @media(max-width:1000px){
    flex-direction: column;
    >img{
      align-self: center;
    }
  }
}

.sep{
  font-family: futura;
  line-height: 1.5;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  color: #333;
  @media(max-width:500px){
    flex-direction: column;
    img{
      align-self: center;
    }
  }
  img{
    border-radius: 3px;
    margin-bottom:30px;
  }
  p{
    display: flex;
    align-items: center;
    margin:0px;
    margin-bottom:30px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #eee;
    border-radius: 3px;
  }
}

.size{
    width:220px;
    height:220px;
    min-width:220px;
    min-height:220px;
}
</style>

