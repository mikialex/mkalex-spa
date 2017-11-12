import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Article from '@/pages/article/article'
import ArticleStream from '@/pages/article/stream'
import ArticleArchive from '@/pages/article/archive'
import Portifolio from '@/pages/portfolio'
import Collection from '@/pages/collection'
import Meta from '@/pages/meta'
import Reader from '@/pages/reader'

import Caicai from '@/pages/caicai'
import Copyright from '@/pages/copyright'

import ErrorPage404 from '@/pages/404'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '*',
      redirect: { name: '404' }
    },
    {
      path: '/404',
      name: '404',
      components: {
        clean:ErrorPage404
      }
    },
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/article',
      component: Article,
      name: 'article',
      redirect: { name: 'articleStream' },
      children: [
        {
          path: 'stream',
          component: ArticleStream,
           name: 'articleStream',
        },
        {
          path: 'archive',
          component: ArticleArchive,
          name:'articleArchive',
        }
      ]
    },
    {
      path: '/portfolio',
      name: 'portfolio',
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
      components: {
        clean:Caicai
      }
    },{
      path: '/reader/:type/:u_name',
      name: 'reader',
      components: {
        clean:Reader
      }
    },
    
  ],
})
