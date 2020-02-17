<template>
  <div v-if="semester !== ''" class="home-container">
    <md-card>
      <md-card-header>
        <div class="md-title">{{semester}} Hackathon!</div>
      </md-card-header>
      <md-card-media>
        <a href="https://byu.az1.qualtrics.com/jfe/form/SV_aVmeFBusXsnw1tH">
          <img class="flyer" v-bind:src="flyer">
        </a>
      </md-card-media>
    </md-card>
  </div>
</template>

<script>

export default {
  name: "Hackathon",
  data() {
    return {
      semester: "Winter 2020", // Always change every semester
      flyer: "../static/hackathon_flyer.jpg", // DON'T change! Make sure the flyer has the same file name and extention.
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
