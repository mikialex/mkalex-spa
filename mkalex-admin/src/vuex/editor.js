import { get, getAuth, post, patch, del, apis } from '../api/ajax-global';

export default {
  namespaced: true,
  state: {
    urlname: '',
    title: '',
    subTitle: '',
    urlname: '',
    content: '',
    createTime: '',
    pageView: '',
    hasCover: false,
    isRecommended: false,
    contentType: '',
    isActive: false,

  },
  mutations: {
    reset(state) { // this.$store.commit('add_GoingAjax')
      state.goingAjax++;
    },
  },
  actions: {
    async getEntity({ commit, dispatch, state, getters }, urlname) {
      getAuth(this.$ajax.apis.articleDetialAdmin, {
        urlname: urlname
      })
    },
    async updateEntityInfo({ commit, dispatch, state, getters }, urlname) {
    
    }
  }
}