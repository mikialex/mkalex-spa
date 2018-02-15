import { get, getAuth, post, patch, del, apis } from '../api/ajax-global';

export default {
  namespaced: true,
  state: {
    entityTags:[],
    tagList: [],
  },
  mutations: {
    setTagList(state, list) {
      state.tagList = list;
    },
    setEntityTags(state, list) {
      state.entityTags = list;
    }
  },
  actions: {
    async getTags({ commit, dispatch, state, getters }) {
      const data = await getAuth(apis.tagList);
      commit('setTagList', data);
    },
    async getEntityTags({ commit, dispatch, state, getters }, urlname) {
      const data = await getAuth(apis.articleTagList, {
        urlname:urlname
      });
      commit('setEntityTags', data);
    },
    async toggleEntityTags({ commit, dispatch, state, getters }, {urlname, tagname,status}) {
      if (status) {
        console.log('dele');
        const data = await del(apis.articleTag, {
          urlname: urlname,
          tagname: tagname,
        });
      } else {
        console.log('post');
        const data = await post(apis.articleTag, {
          urlname: urlname,
          tagname: tagname,
        });
        console.log(data);
      }
      await dispatch('getTags');
      await dispatch('getEntityTags',urlname);
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