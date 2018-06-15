
export const actions = {

  getArticleList(context, payload) {
    payload.env.$ajax.get(env, 'articles')
      .then(data => {
        console.log(data)
      }).catch(payload.env.$ajax.handleErr(env))
  },


  getArticleByURL(context, payload) {

  },


  getArticleDetailList(context, payload) {
    store.dispatch('getArticleByURL', {
      url: 10
    })
  }
}