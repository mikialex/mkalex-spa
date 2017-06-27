import Vue from 'vue';
import Vuex from 'vuex';

import {mutations} from './mutations.js'
import {state} from './state.js'

// import workDoing from './modules/work-doing.js'
// import auth from './modules/auth.js'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
  // actions,
  // getters,
  // modules: {
  //   auth,
  //   workDoing,
  // },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
