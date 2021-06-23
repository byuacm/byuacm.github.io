// =========================================================
// * Vue Material Kit - v1.2.2
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-kit
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-kit/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from "vue";
import App from "./App.vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faTwitter, faFacebookSquare, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import HomePage from './views/HomePage';
import Footer from './views/Footer';
import HomeNavBar from './views/HomeNavBar';

library.add(faLinkedin, faTwitter, faFacebookSquare, faInstagram, faDiscord, faEnvelope, faPenFancy);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('HomePage', HomePage);
Vue.component('HomeNavBar', HomeNavBar);
Vue.component('HomeFooter', Footer);

import MaterialKit from "./plugins/material-kit";
Vue.use(MaterialKit);

Vue.config.productionTip = false;
const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

// Cleanse a string of html tags
Vue.filter('striphtml', function (value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
});

new Vue({
  render: h => h(App)
}).$mount("#app");
