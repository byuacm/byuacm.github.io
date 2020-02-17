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
      <md-card-content>
        <h2>Here's why this year's Y-Hack is going to be fun</h2>
        <ol>
          <li>Fun and engaging workshops: Reinforcement Learning, Flutter, Rust and so much more</li>
          <li>Network with companies</li>
          <li>Great hackathon mentors: there’ll be computer science faculty and other students to help you get started on your hack</li>
          <li>Great food</li>
          <li>Cool prizes</li>
          <li>Fun games and challenges</li>
          <li>Make meaningful connections with other students</li>
        </ol>
        <h2>Still on the fence about hackathons in general? Here are some reasons to attend hackathons:</h2>
        <ol>
          <li>You get a chance to put your creative hat on and finally work on that crazy idea you’ve had</li>
          <li>Work with and learn from other students</li>
          <li>It’s just fun to be in a place where everyone’s just hacking at something, learning and having fun together</li>
          <li>Network. Can’t say enough about this one</li>
          <li>Well, hackathons are just outright fun!</li>
          <li>Great products have come out of hackathons: one of our own is Nick Walton’s <a href="https://aidungeon.io">AI Dungeon 2</a> Others include GroupMe, EasyTaxi, Carousell</li>
        </ol>
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
