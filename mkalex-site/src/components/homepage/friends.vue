<template>
  <container-mid>
      <div class="friends">
         <h2>Friends Link</h2>
        <ul>
          <li v-for="friend in friends" :key="friend.link"
          ><a target="blank" :href="friend.link">{{friend.title}}</a></li>
        </ul>
      </div>
    </container-mid>
</template>

<script>
export default {
  data(){
    return {
      friends:[
        {title:"Angus Lee's Virtual Lab", link:'https://lang.doubi.fun/'},
        {title:"Aurthur", link:'http://aurthur.gitos.cn/'},
        {title:"Yisaer", link:'https://yisaer.github.io/'},
        {title:"Ivan Dart", link:'http://potnote.tk/'},
        {title:"Puyh", link:'https://puyihua.github.io/'},
        {title:"Jader's Blog", link:'http://jader.xyz/'},
        {title:"INSLENS DESIGN", link:'https://inslens.com'},
      ]
    }
  }
}
</script>



<style lang="scss" scoped>
.friends{
  font-family: futura;
  font-size:14px;
  width:100%;
  margin-top:20px;
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
</style>
