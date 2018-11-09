export const mutations = {

  add_GoingAjax(state) {
    state.goingAjax++;
  },
  minus_GoingAjax(state) {
    state.goingAjax--;
  },
  reset_GoingAjax(state) {
    state.goingAjax = 0;
  },

  setErrMessage(state, payload) {
    state.errorMessage = payload.message
  },
  clearErr(state) {
    state.errorMessage = ''
  },

  openTopNav(state) {
    state.topNavOpen = true
  },
  closeTopNav(state) {
    state.topNavOpen = false
  },
  toggleTopNav(state) {
    state.topNavOpen = !state.topNavOpen
  },

};
