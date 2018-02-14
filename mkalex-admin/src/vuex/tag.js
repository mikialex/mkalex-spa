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

    async addNewTags({ commit, dispatch, state, getters }, newTagName) {
      const data = await post(apis.tag, { tagName: newTagName });
      if (data.result === 'success') {
        dispatch('getTags');
      } else {
        throw data;
      }
    },

    async deleteTags({ commit, dispatch, state, getters }, tagName) {
      const data = await del(apis.tag, { tagName: tagName });
      if (data.result === 'success') {
        state.tagList = state.tagList.filter(tag => {
          return tag.tag_name !== tagName;
        })
      } else {
        throw data;
      }
    },

  }
}