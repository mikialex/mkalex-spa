import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
import { get, getAuth, post, patch, del, apis } from '../api/ajax-global';
import { baseURL } from '@/api/config'


import editor from './editor'
import tag from './tag'


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
        const data = await axios.post(baseURL + apis.login, { username, password })
        if (data.result === 'success') {
          commit('setClientToken', { token: data.token })
        } else {
          throw data.message;
        }
      } catch (error) {
        throw error
      }
    },

    async logout({ commit, dispatch, state, getters }, urlname) {

    },

    async getArticleList({ commit, dispatch, state, getters }) {
      const data = await getAuth(apis.articleListAdmin);
      commit('setEntityList', data);
    },


  },
  modules: {
    editor, tag
  },
})
