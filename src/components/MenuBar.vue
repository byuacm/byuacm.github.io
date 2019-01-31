<template>
  <div class="acm">
    <md-toolbar class="header">
      <div class="md-toolbar-row">
        <a href="/">
          <img class="acm_logo" v-bind:src="imagePath">
        </a>
        <div class="menu">
          <md-button class="md-icon-button" @click.native="showMenu = !showMenu">
            <md-icon>{{showMenu ? 'close' : 'menu'}}</md-icon>
          </md-button>
          <md-button
            @click.native="routeTo('/')"
            v-bind:class="{ active: isPath('/'), 'show-mobile': showMenu }"
            class="menu-item"
          >Home</md-button>
          <md-button
            @click.native="routeTo('/events')"
            v-bind:class="{ active: isPath('/events'), 'show-mobile': showMenu }"
            class="menu-item"
          >Events</md-button>
          <md-button
            @click.native="routeTo('/leadership')"
            v-bind:class="{ active: isPath('/leadership'), 'show-mobile': showMenu }"
            class="menu-item"
          >Leadership</md-button>
          <md-button
            @click.native="routeTo('/contributors')"
            v-bind:class="{ active: isPath('/contributors'), 'show-mobile': showMenu }"
            class="menu-item"
          >Sponsors</md-button>
          <md-button
            @click.native="routeTo('/about')"
            v-bind:class="{ active: isPath('/about'), 'show-mobile': showMenu }"
            class="menu-item"
          >About</md-button>
        </div>
        <md-button
          class="email-button md-raised md-primary"
          href="https://goo.gl/8Gq7Cz"
          target="_blank"
          v-bind:class="{'show-mobile': showMenu}"
        >Get ACM Emails</md-button>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagePath: "/static/byu-acm-logo.png",
      showMenu: false
    };
  },
  methods: {
    isPath: function(path) {
      return this.$route.path === path;
    },
    routeTo(route) {
      this.$router.push(route);
      this.showMenu = false;
    }
  }
};
</script>

<style scoped>
body {
  padding: 0px;
  margin: 0px;
}

.header {
  background: #2d2c2d;
  color: #aaa;
  padding: 0 20px;
}

.md-toolbar-row {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-grow: 1;
  padding: 10px;
}

.acm_logo {
  width: 100px;
  height: 100px;
  min-width: 100px;
  margin: 0 10px;
  flex-shrink: 0;
}

.email-button {
  color: white;
  font-size: 12px;
  min-width: 120px;
  margin: 0;
}

.bottom-row {
  justify-content: center;
}

.menu {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  max-width: 700px;
  width: 100%;
}

.menu-item {
  margin: 0 !important;
  color: white;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1.5px;
  text-decoration: none;
  text-transform: uppercase;
  flex-shrink: 1;
}

.active {
  border-bottom: white 2px solid;
}

.menu .md-icon-button {
  display: none;
}

@media (max-width: 830px) {
  .acm_logo {
    height: 50px;
    width: 50px;
    min-width: 50px;
  }

  .email-button {
    font-size: 8px;
    min-width: 80px;
    margin: auto 0 ;
    transition: none;
  }

  .menu {
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
  }

  .menu .menu-item {
    height: 0;
    display: none;
    -webkit-transition: width display 2s; /* Safari */
    transition: height display 2s;
  }

  .menu .show-mobile {
    height: auto;
    display: flex;
    margin: 5px 0 !important;
  }

  .menu .md-icon-button {
    display: flex;
  }

  .email-button.show-mobile {
    visibility: hidden;
    height: 0;
  }
}
</style>
