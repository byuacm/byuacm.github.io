<template>
  <div v-if="semester !== ''" class="home-container">
    <md-card>
      <md-card-header>
        <div class="md-title">Next club activity for {{semester}} semester:</div>
      </md-card-header>
      <md-card-media>
        <img class="flyer" v-bind:src="flyer">
      </md-card-media>
    </md-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      flyer: "",
      semester: ""
    };
  },
  methods: {
    load: function() {
      axios
        .post("/acm/home")
        .then(res => {
          this.flyer = res.data.flyer;
          this.semester = res.data.semester;
        })
        .catch(err => {});
    }
  },
  created: function() {
    this.load();
  }
};
</script>

<style scoped>

.home-container {
  display: flex;
  justify-content: center;
}

.md-card {
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flyer {
  padding: 0 30px 30px 30px;
}
</style>
