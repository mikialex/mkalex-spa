export const getters = {

  currentPageArticles: state => {
    const current = state.currentPage;
    const from = current * state.eachPageNumber;
    const to = (current + 1) * state.eachPageNumber;
    return state.articleList.slice(from, to);
  },

};