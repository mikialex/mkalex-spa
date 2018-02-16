import { get, getAuth, post, patch, del, apis } from '../api/ajax-global';
import { Message } from 'element-ui';

export default {
  namespaced: true,
  state: {
    imageList: [],
  },
  mutations: {
    setImageList(state, list) {
      state.imageList = list;
    },
  },
  actions: {
    async getImageList({ commit, dispatch, state, getters }) {
      const data = await getAuth(apis.imageList);
      commit('setImageList', data);
    },
    
    async uploadImage({ commit, dispatch, state, getters }, { file, name, progressCallBack}) {

      const payload = new FormData();
      payload.append('image', file, file.name);
      const data = await post(apis.image, payload, { name }, {
        onUploadProgress(progressEvent) {
          if (progressEvent.lengthComputable) {
            progressCallBack(progressEvent);
          }
        }
      });
      if (data.result === 'success') {
        Message.success('upload success');
        dispatch('getImageList');
        return data.imageUrl;
      } else {
        throw data;
      }
    },

    async deleteImage({ commit, dispatch, state, getters }, name) {
      const data = await del(apis.image, { imagePathName: name });
      if (data.result === 'success') {
        Message.success('delete image success');
        dispatch('getImageList');
        return data;
      } else {
        throw data;
      }
    },

  }
}