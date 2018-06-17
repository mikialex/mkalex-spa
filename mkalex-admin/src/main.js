// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import './element-style/index.css'
Vue.use(ElementUI)
Vue.use(Vuex)
import store from './vuex'
import * as vueAjax from './api/ajax-global'

// import MKLayout from '../../mkalex-site/src/layout/include'
import MKTransition from '../../mkalex-site/src/transitions/include'
// MKLayout.map(component => {
//    Vue.component(component.name, component);
// });
MKTransition.map(component => {
  Vue.component(component.name, component);
});

import MKCommon from '../../mkalex-site/common/include';
MKCommon.map(component => {
  Vue.component(component.name, component);
});

import toggle from './components/form/toggle.vue'
Vue.component('mk-toggle', toggle);

Vue.config.productionTip = false

Vue.prototype.$ajax = vueAjax

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
