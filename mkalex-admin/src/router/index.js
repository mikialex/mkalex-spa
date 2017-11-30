import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/login'
import HomePage from '@/components/home'
import EditorPage from '@/components/editor/editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      components: {
        blank: LoginPage,
      }
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/editor/:type/:u_name',
      name: 'editor',
      component: EditorPage,
    },
  ]
})
