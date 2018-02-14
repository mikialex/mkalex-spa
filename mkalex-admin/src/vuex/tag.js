import { get, getAuth, post, patch, del, apis } from '../api/ajax-global';

export default {
  namespaced: true,
  state: {
    tagList: [],
  },
  mutations: {
    setTagList(state, list) {
      state.tagList = list;
    },
  },
  actions: {
    async getTags({ commit, dispatch, state, getters }) {
      const data = await getAuth(apis.tagList);
      commit('setTagList', data);
    },
    
  }
}