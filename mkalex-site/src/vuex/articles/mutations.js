export const mutations = {
  updateContent(state, payload) {
    state.detailList.forEach(article => {
      if (article.urlname === payload.urlname) {
        article.content = payload.content;
      }
    });
  }
    
};