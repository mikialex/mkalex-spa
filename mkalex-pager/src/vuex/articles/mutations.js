export const mutations = {

  reset_hasArticleListLoaded(state) { // this.$store.commit('add_GoingAjax')
    state.hasArticleListLoaded=false;
  },
  ArticleListLoaded(state) { 
    state.hasArticleListLoaded=true;
  },
    
};