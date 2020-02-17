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
      <md-card-media>
        <a href="https://byu.az1.qualtrics.com/jfe/form/SV_aVmeFBusXsnw1tH">
          <img class="info_flyer" v-bind:src="info_flyer">
        </a>
      </md-card-media>
      <md-card-content>
        <h2 class="signup">
          <a href="https://byu.az1.qualtrics.com/jfe/form/SV_aVmeFBusXsnw1tH">Sign up for the Y-Hack!</a>
        </h2>
      </md-card-content>
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
      info_flyer: "../static/hackathon_info_flyer.jpg"
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

.signup {
  text-align: center;
  text-decoration: underline;
}
</style>
