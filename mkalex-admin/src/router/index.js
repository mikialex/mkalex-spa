import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/login'
import HomePage from '@/components/home'
import EditorPage from '@/components/editor/editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/editor/:u_name',
      name: 'editor',
      component: EditorPage,
    },
  ]
})
