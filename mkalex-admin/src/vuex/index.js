import Vue from 'vue';
import Vuex from 'vuex';


// import articles from './articles'
// import auth from './modules/auth.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goingAjax: 0, //
  },
  mutations: {
    add_GoingAjax(state) { // this.$store.commit('add_GoingAjax')
      state.goingAjax++;
    },
    minus_GoingAjax(state) {
      state.goingAjax--;
    },
  }
  // actions,
  //   getters,
  // modules: {
  //   articles,
  // },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
