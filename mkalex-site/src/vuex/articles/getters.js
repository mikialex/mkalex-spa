export const getters = {

  currentPageArticles: state => {
    return state.articleList.slice(0, 10);
  }

};