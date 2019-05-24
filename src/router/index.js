import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Events from '@/components/Events'
import Leadership  from '@/components/Leadership'
import Contributors from '@/components/Contributors'
import About from '@/components/About'
import Resources from '@/components/Resources'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/events',
      name: 'Events',
      component: Events,
    },
    {
      path: '/leadership',
      name: 'Leadership',
      component: Leadership,
    },
    {
      path: '/contributors',
      name: 'Contributors',
      component: Contributors,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
        {
      path: '/about',
      name: 'About',
      component: About,
    },

  ]
})
