<template>
  <div v-if="semester !== ''" class="home-container">
    <md-card>
      <md-card-header>
        <div class="md-title">Next club activity for {{semester}} semester:</div>
      </md-card-header>
      <md-card-media>
        <a href="https://www.golucid.co/programming-competition">
          <img class="flyer" v-bind:src="flyer">
        </a>
      </md-card-media>
    </md-card>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  data() {
    return {
      semester: "Fall 2019", // Always change every semester
      flyer: "../static/flyer.jpg", // DON'T change! Make sure the flyer has the same file name and extention.
    };
  },
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
