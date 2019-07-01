import Vue from 'vue'
import Router from 'vue-router';
import RoutePage from './views/route'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '',
      name: 'route',
      component: RoutePage,
      children: []
    },
    {
      path: '/css',
      name: 'css',
      component: () => import('./views/css.vue'),
      //二级路由
      children: [{
          path: '/web',
          name: 'web',
          redirect: 'film'
        }, //配置默认显示模板内容
        {
          path: '/film',
          name: 'film',
          component: () => import('./views/twice/neirong/film.vue'),

        },
        {
          path: '/tv',
          name: 'tv',
          component: () => import('./views/twice/neirong/tv.vue'),
        },
        {
          path: '/music',
          name: 'music',
          component: () => import('./views/twice/neirong/music.vue'),
          //三级路由
          children: [{
              path: '/let',
              name: 'let',
              component: () => import('./views/twice/neirong/three/let.vue'),
            },
            {
              path: '/var',
              name: 'var',
              component: () => import('./views/twice/neirong/three/var.vue'),
            }
          ]
        }
      ]
    },
    {
      path: '/js',
      name: 'js',
      component: () => import('./views/js.vue')
    },
    {
      path: '/route',
      name: 'route',
      component: () => import('./views/route.vue')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('./views/vuex.vue')
    },
  ]
})