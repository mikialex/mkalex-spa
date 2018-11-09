
export const actions = {

  getArticleList(context, payload) {
    payload.env.$ajax.get(env, 'articles')
      .then(data => {
        console.log(data)
      })
  },

  getArticleByURL(context, payload) {

  },

  getArticleDetailList(context, payload) {
    store.dispatch('getArticleByURL', {
      url: 10
    })
  }
}