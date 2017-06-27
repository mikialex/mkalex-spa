import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Article from '@/pages/article/article'
import ArticleStream from '@/pages/article/stream'
import ArticleArchice from '@/pages/article/archive'
import Portifolio from '@/pages/portfolio'
import Collection from '@/pages/collection'
import Meta from '@/pages/meta'

import Caicai from '@/pages/caicai'
import Copyright from '@/pages/copyright'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article',
      name: 'article',
      component: Article,
      children: [
        {
          path: 'stream',
          component: ArticleStream
        },
        {
          path: 'archive',
          component: ArticleArchice
        }
      ]
    },
    {
      path: '/portfolio',
      name: 'portifolio',
      component: Portifolio
    },{
      path: '/collection',
      name: 'collection',
      component: Collection
    },{
      path: '/meta',
      name: 'meta',
      component: Meta
    },{
      path: '/caicai',
      name: 'caicai',
      component: Caicai
    },
  ]
})
