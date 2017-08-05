<template>
  <section>
    <page-title :title="'Article'" :subTitle="'Think Different, Make Believe'"></page-title>
    <article-switcher></article-switcher>
    <!--<container-mid>
      <div style="height:100px;width:100px;background:#777">aricle</div>
    </container-mid>-->
    <container-mid>
      <trans-fade>
        <router-view></router-view>
      </trans-fade>
    </container-mid>
  </section>
</template>

<script>
import  PageTitle from '@/components/title/title-main'
import webglLogo from '@/components/homepage/webgl-logo'
import switcher from '@/components/nav/article-switcher'
export default {
  components: {
    'webgl-logo': webglLogo,
    'page-title':PageTitle,
    'article-switcher':switcher,
  },
  mounted(){
    this.$store.commit('reset_hasArticleListLoaded');
    // this.$store.dispatch('getArticleList')
    this.$ajax.get(this,this.$ajax.apis.articleList)
    .then(data=>{
      console.log(data)
      this.$store.state.articles.articleList=data
      this.$store.commit('ArticleListLoaded');
    }).catch(this.$ajax.handleErr(this))
  },
}
</script>
