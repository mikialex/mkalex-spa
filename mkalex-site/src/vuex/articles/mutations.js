function getTimeStamp(time) {
  return new Date(time).getTime();
}

export const mutations = {
  updateContent(state, payload) {
    state.detailList.forEach(article => {
      if (article.urlname === payload.urlname) {
        article.content = payload.content;
      }
    });
  },

  sortByTime(state) {
    function timeSorter(articleA, articleB) {
      return getTimeStamp(articleB.publish_time) - getTimeStamp(articleA.publish_time);
    }
    state.articleList = state.articleList.slice().sort(timeSorter);
  },

  sortByTimeRevese(state) {
    function timeSorterReverse(articleA, articleB) {
      return getTimeStamp(articleA.publish_time) - getTimeStamp(articleB.publish_time);
    }
    state.articleList = state.articleList.slice().sort(timeSorterReverse);
  },

  sortByViewTime(state) {
    function sorter(articleA, articleB) {
      return getTimeStamp(articleB.page_view) - getTimeStamp(articleA.page_view);
    }
    state.articleList = state.articleList.slice().sort(sorter);

  },

  articleListLoaded(state) {
    state.isArticleListLoaded = true;
  },
  
  reloadArticleList(state) {
    state.isArticleListLoaded = false;
  },

  switchPage(state, pageNumber) {
    state.currentPage = pageNumber;
  }
    
};