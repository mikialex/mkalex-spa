import Vue from 'vue';
import Vuex from 'vuex';

import { mutations } from './mutations.js'
import { state } from './state.js'
import { getters } from './getters.js'

import articles from './articles'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  // actions,
  getters,
  modules: {
    articles,
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
