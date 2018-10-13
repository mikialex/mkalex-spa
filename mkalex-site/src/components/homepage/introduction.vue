<template>
  <container-mid>
    <div class="intro">
      <div class="sep">
        <img src="../../assets/avatar-back.png" alt="">
        <p>Here i write things about technology, design, and my life. this site
          is also as my personal portfolio, my project archive. 
          any content should shared, distributed
          with my explicit permission.
        
        </p>
      </div>
      <div class="sep">
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
  margin-top:100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;  
  @media(max-width:900px){
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
    >img{
      align-self: center;
    }
  }
  >img{
    width:220px;
    height:220px;
    min-width:220px;
    min-height:220px;
    border-radius: 3px;
  }
  >p{
    display: flex;
    align-items: center;
    width:220px;
    height:220px;
    min-width:220px;
    min-height:220px;
    margin:0px;
    padding: 10px;
    box-sizing: border-box;
    // border: 1px solid #888;
  }
}
</style>

