import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage';
import Events from '@/views/Events';
import Leadership  from '@/views/Leadership';
import Contributors from '@/views/Contributors';
import About from '@/views/About';
import Resources from '@/views/Resources';
import Hackathon from '@/views/Hackathon';
import Landing from '@/views/Landing';
import Index from '@/views/Index';

import Footer from '@/views/Footer';
import HomeNavBar from '@/views/HomeNavBar';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      components: { default: HomePage, header: HomeNavBar, footer: Footer },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/index',
      name: 'Creative Tim Example Index',
      components: { default: Index, header: HomeNavBar, footer: Footer }
    },
    {
      path: '/Landing',
      name: 'Creative Tim Example Landing',
      components: { default: Landing, header: HomeNavBar, footer: Footer }
    },
    /*{
      path: '/events',
      name: 'Events',
      components: { default: Events, header: HomeNavBar, footer: Footer }
    },
    {
      path: '/leadership',
      name: 'Leadership',
      components: { default: Leadership, header: HomeNavBar, footer: Footer }
    },
    {
      path: '/contributors',
      name: 'Contributors',
      components: { default: Contributors, header: HomeNavBar, footer: Footer }
    },
    {
      path: '/about',
      name: 'About',
      components: { default: About, header: HomeNavBar, footer: Footer }
    },
    {
      path: '/resources',
      name: 'Resources',
      components: { default: Resources, header: HomeNavBar, footer: Footer }
    },
    {
      path: '/hackathon',
      name: 'Hackathon',
      components: { default: Hackathon, header: HomeNavBar, footer: Footer }
    }*/
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
})
