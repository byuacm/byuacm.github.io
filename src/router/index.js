import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage';
import Footer from '../views/Footer';
import HomeNavBar from '../views/HomeNavBar';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    components: { default: HomePage, header: HomeNavBar, footer: Footer },
    props: {
      header: { colorOnScroll: 400 }
    }
  },
  {
    // TODO: Someday I'll put a real 404 page in here
    path: '/*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
})

export default router
