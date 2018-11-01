<template>
  <div id="app">
    <menu-bar/>
    <router-view/>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar';
export default {
  name: 'App',
  components: { MenuBar } 
}
</script>

<style>
body {
    font-size: 16px;
    /* padding: 20px 100px 0px 100px; */
    /* -webkit-font-smoothing: antialiased; */
    /* -moz-osx-font-smoothing: grayscale; */
    font-family: Roboto, Arial, Helvetica, sans-serif;
}
</style>