import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage'
import Events from '@/components/Events'
import Leadership  from '@/components/Leadership'
import Contributors from '@/components/Contributors'
import About from '@/components/About'
import Resources from '@/components/Resources'
import Hackathon from '@/components/Hackathon'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
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
      path: '/resources',
      name: 'Resources',
      component: Resources,
    },
    {
      path: '/hackathon',
      name: 'Hackathon',
      component: Hackathon,
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    }
  ]
})
