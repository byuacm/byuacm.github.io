<template>
  <div id="app">
    <!-- <div class="menu-bar">
      <menu-bar/>
    </div> -->
    <div class="content">
      <router-view/>
    </div>
    <footer id="footer">© 2020 BYU Association for Computing Machinery</footer>
  </div>
</template>

<script>
//import MenuBar from "./components/MenuBar";
export default {
  name: "App",
  //components: { MenuBar }
};
</script>

<style>
body {
  font-size: 16px;
  /* padding: 20px 100px 0px 100px; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  font-family: Roboto, Arial, Helvetica, sans-serif;
}

.menu-bar {
  position: fixed;
  width: 100%;
  z-index: 1000;
  right: 0;
  left: 0;
}

.content {
  padding: 160px 20px 0 20px;
  min-height: 110vh;
}

footer {
    color: #2BBAE4;
    background-color: #2D2C2D;
    padding: 15px;
    text-align: center;
    font-family: Verdana;
    margin-top: 30px;
}

h1, h2, h3, h4, h5, h6 {
  color: #2BBAE4;
}

.md-primary {
  background-color: #00afec !important;
}

.md-progress-bar {
  width: 100%;
}
</style>
