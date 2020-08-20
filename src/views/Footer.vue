<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://www.byu.edu">
              byu.edu
            </a>
          </li>
          <li>
            <a href="https://www.acm.org">
              acm.org
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" v-on:click="scrollToElement('scroll_to_about');">
              About Us
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }} BYU ACM. Theme courtesy of
        <a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a><br />
        Motherboard image provided by <a href='https://www.unsplash.com'>Unsplash</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  methods: {
    scrollToElement(element) {
      let element_id = document.getElementById(element);
      if (element_id) {
        element_id.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  }
};
</script>
<style></style>
