import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    }
  ]
})
