// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { MdButton, MdIcon, MdToolbar, MdCard, MdProgress } from 'vue-material/dist/components'
import router from './router'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.config.productionTip = false
Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdToolbar)
Vue.use(MdCard)
Vue.use(MdProgress)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
