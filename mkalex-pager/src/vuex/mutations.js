export const mutations = {

  add_GoingAjax(state) { // this.$store.commit('add_GoingAjax')
    state.goingAjax++;
  },
  minus_GoingAjax(state) { // this.$store.commit('minus_GoingAjax')
    state.goingAjax--;
  },

  openTopNav(state) {
    state.topNavOpen=true
  },
  closeTopNav(state) {
    state.topNavOpen=false
  },
  toggleTopNav(state) {
    state.topNavOpen=!state.topNavOpen
  },
    
};
