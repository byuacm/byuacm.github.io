<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <img src="@/assets/img/byu-acm-logo.png" id='acm_logo' style='height: 15vh' />
      <div class="md-toolbar-section-start">
        <h3 id='acm_logo_text' style='margin: 3px; visibility: hidden' >BYU ACM</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <md-list-item
                href="https://goo.gl/8Gq7Cz"
                target="_blank"
              >
                <font-awesome-icon class='md-default fa-lg fa-fw' :icon="['fas', 'envelope']"></font-awesome-icon>
                <p style='margin-left: 5px;'>Join Email List</p>
              </md-list-item>

              <md-list-item href="mailto:cs.byu.acm@gmail.com?subject=We%20would%20be%20interested%20in%20connecting!">
                <font-awesome-icon class='md-default fa-lg fa-fw' :icon="['fas', 'pen-fancy']"></font-awesome-icon>
                <p style='margin-left: 5px;'>Company Inqueries</p>
              </md-list-item>

              <md-list-item
                href="https://twitter.com/byuacm?lang=en"
                target="_blank"
              >
                <font-awesome-icon class='md-default fa-lg fa-fw' :icon="['fab', 'twitter']"></font-awesome-icon>
                <p class="hidden-lg" style='margin-left: 5px;'>Twitter</p>
                <md-tooltip md-direction="bottom"
                  >Follow us on Twitter</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="https://www.facebook.com/acmbyu/"
                target="_blank"
              >
                <font-awesome-icon class='md-default fa-lg fa-fw' :icon="['fab', 'facebook-square']"></font-awesome-icon>
                <p class="hidden-lg" style='margin-left: 5px;'>Facebook</p>
                <md-tooltip md-direction="bottom"
                  >Like us on Facebook</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="https://www.instagram.com/byu_acm/?hl=en"
                target="_blank"
              >
                <font-awesome-icon class='md-default fa-lg fa-fw' :icon="['fab', 'instagram']"></font-awesome-icon>
                <p class="hidden-lg" style='margin-left: 5px;'>Instagram</p>
                <md-tooltip md-direction="bottom"
                  >Follow us on Instagram</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="https://discord.gg/X5BjgGK"
                target="_blank"
              >
                <font-awesome-icon class='md-default fa-lg fa-fw' :icon="['fab', 'discord']"></font-awesome-icon>
                <p class="hidden-lg" style='margin-left: 5px;'>Discord</p>
                <md-tooltip md-direction="bottom"
                  >Join our Discord Server</md-tooltip
                >
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue = document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      let acmLogo = document.getElementById("acm_logo");
      let acmLogoText = document.getElementById("acm_logo_text");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
        acmLogo.style.height = '5vh';
        acmLogoText.style.visibility = 'visible';
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
          acmLogo.style.height = '15vh';
          acmLogoText.style.visibility = 'hidden';
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
