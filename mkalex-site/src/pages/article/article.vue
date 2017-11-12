<template>
  <section>
    <page-title :title="'Article'" :subTitle="'Think Different, Make Believe'"></page-title>
    <article-switcher></article-switcher>
    <container-mid>
      <trans-fade>
        <router-view></router-view>
      </trans-fade>
    </container-mid>
  </section>
</template>

<script>
import PageTitle from '@/components/title/title-main'
import webglLogo from '@/components/homepage/webgl-logo'
import switcher from '@/components/nav/article-switcher'
export default {
  components: {
    'webgl-logo': webglLogo,
    'page-title':PageTitle,
    'article-switcher':switcher,
  },
  mounted(){
    this.$ajax.get(this,this.$ajax.apis.articleList)
    .then(data=>{
      console.log('get article list :'+data);
      this.$store.state.articles.articleList=data
    })
    .catch(this.$ajax.handleErr(this))
    .then(
      ()=>{//get detail list


        let listSmall=[];
        for (let i = 0; i < 2; i++) {
          if (this.$store.state.articles.articleList[i]) {
            let temp=this.$store.state.articles.articleList[i];
            temp.content='loading.....';
            listSmall.push(temp)
          }
        }
        listSmall.forEach(article => {
          console.log(article.urlname)
          this.$ajax.get(this,this.$ajax.apis.articleContent,{urlname:article.urlname})
          .then(data=>{
            console.info('get article detail :' , data);
            article.content=data.content;
            // this.$store.commit('updateContent',{urlname:article.urlname,content:data.content})
          }).catch(this.$ajax.handleErr(this))
        });
      this.$store.state.articles.detailList=listSmall


      }
    )
  },
}
</script>
