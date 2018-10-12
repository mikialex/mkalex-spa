<template>
  <container-mid>
    <div class="intro">
        <img src="../../assets/avatar-back.png" alt="">
      <div class="intro-text">
      <p>Here i write things about technology, design, and my life. this site
        is also as my personal portfolio, my project archive. 
        any content should shared, distributed
        with my explicit permission.
      
      </p>
      <p>
        I am interested in GUI system, 
        computer graphics, CAD, simulation, visulization, procedural aesthetics. 
        With the background of art and design.
        I believe the greatest thing came from fusion of art and technology.
      </p>
      <p>
        Best wishes for every visitor, may you find some useful reference, enthusiasm
        about magic fields, and the beauty and happyness of plain daily life.
      </p>
      </div>
    </div>
  </container-mid>
</template>

<style lang="scss" scoped>
.intro{
  font-family: futura;
  line-height: 1.5;
  width:100%;
  margin-top:100px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  @media(max-width:700px){
    flex-direction: column-reverse;
    >img{
      align-self: center;
      margin-top:50px;
      margin-bottom:50px;
    }
  }
  >img{
    width:200px;
    height:200px;
    min-width:200px;
    min-height:200px;
    border-radius: 3px;
  }
  >.intro-text{
    padding:20px;
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    >p{
      width: 200px;
      margin:0px;
    }
  }
}
</style>

