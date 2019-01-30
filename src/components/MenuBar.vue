<template>
  <div class="acm">
    <md-toolbar class="header">
      <div class="md-toolbar-row">
        <a href="/">
          <img class="acm_logo" v-bind:src="imagePath">
        </a>
        <div class="menu">
          <md-button @click.native="$router.push('/')" class="menu-item">Home</md-button>
          <md-button @click.native="$router.push('events')" class="menu-item">Events</md-button>
          <md-button @click.native="$router.push('/leadership')" class="menu-item">Leadership</md-button>
          <md-button @click.native="$router.push('/contributors')" class="menu-item">Sponsors</md-button>
          <md-button @click.native="$router.push('/about')" class="menu-item">About</md-button>
        </div>
        <md-button
          class="email-button md-raised md-primary"
          href="https://goo.gl/8Gq7Cz"
          target="_blank"
        >Get BYU ACM Emails</md-button>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagePath: "/static/byu-acm-logo.png"
    };
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
  flex-shrink: 0;
}

.email-button {
  color: white;
  font-size: 14px;
  min-width: 162px;
  margin: 0;
}

.bottom-row {
  justify-content: center;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.menu-item {
  margin: 0 16px !important;
  color: white;
  font-size: 18px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  flex-shrink: 1;
}
</style>
