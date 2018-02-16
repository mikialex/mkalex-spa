import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
import { get, getAuth, post, patch, del, apis } from '../api/ajax-global';
import { baseURL } from '@/api/config'


import editor from './editor'
import tag from './tag'
import image from './image'


export default new Vuex.Store({
  state: {
    goingAjax: 0, 
    token: '',
    entityList: [],
  },
  mutations: {
    add_GoingAjax(state) { 
      state.goingAjax++;
    },
    minus_GoingAjax(state) {
      state.goingAjax--;
    },
    setClientToken(state, { token }) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    clearToken(state) {
      state.token = '';
      localStorage.clear()
    },
    setEntityList(state, list) {
      state.entityList = list;
    },
  },
  actions: {
    async login({ commit, dispatch, state, getters }, { username, password }) {
      try {
        const d = await axios.post(baseURL + apis.login, { username, password });
        const data = d.data;
        if (data.result === 'success') {
          commit('setClientToken', { token:data.token })
        } else {
          throw d;
        }
      } catch (error) {
        throw error
      }
    },

    async logout({ commit, dispatch, state, getters }, urlname) {

    },

    async getEntityList({ commit, dispatch, state, getters }) {
      const data = await getAuth(apis.articleListAdmin);
      console.log(data);
      commit('setEntityList', data);
    },

    async createNewEmptyEntity({ commit, dispatch, state, getters }, { urlName, type }) {
      const date = new Date().toLocaleDateString();
      console.log(date);
      const details = {
        urlname: urlName,
        title: '',
        sub_title: '',
        content: '',
        visit: 1,
        has_cover: false,
        create_time:date,
        is_recommended: false,
        usefor: type,
        is_active: false,
      }
      const data = await post(apis.articleDetial, details);
      if (data.result === 'success') {
        return data;
      } else {
        throw data;
      }
    }


  },
  modules: {
    editor, tag, image
  },
})
