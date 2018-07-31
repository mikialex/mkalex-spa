import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/login/login-page'
import HomePage from '@/components/home'
import EditorPage from '@/components/editor/editor'
import articlePage from '@/components/article'
import portfolioPage from '@/components/portfolio'
import tagPage from '@/components/tag'
import albumPage from '@/components/album/album'

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
      component: LoginPage,
      // components: {
      //   blank: LoginPage,
      // }
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
      redirect: { name: 'article' },
      children: [
        {
          path: 'article',
          component: articlePage,
          name: 'article',
        },
        {
          path: 'portfolio',
          component: portfolioPage,
          name: 'portfolio',
        },
        {
          path: 'tag',
          component: tagPage,
          name: 'tag',
        },
        {
          path: 'album',
          component: albumPage,
          name: 'album',
        }
      ]
    },
    {
      path: '/editor/:u_name',
      name: 'editor',
      component: EditorPage,
    },
  ]
})
