import Vue from 'vue';
import Vuex from 'vuex';

import editor from './editor.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goingAjax: 0, //
    token:'',
  },
  mutations: {
    add_GoingAjax(state) { // this.$store.commit('add_GoingAjax')
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
    }
  },
  // actions,
  //   getters,
  modules: {
    editor,
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
