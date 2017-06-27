// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex'
import App from './App'
import router from './router'

Vue.use(Vuex)

import MKLayout from './layout/include'
MKLayout.map(component => {
   Vue.component(component.name, component);
 });


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
