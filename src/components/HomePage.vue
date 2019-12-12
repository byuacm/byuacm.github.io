<template>
  <div v-if="semester !== ''" class="home-container">
    <md-card>
      <md-card-header>
        <!-- <div class="md-title">Next club activity for {{semester}} semester:</div> -->
        <div class="md-title">Happy Holidays!</div>
      </md-card-header>
      <md-card-content>
        <a href="https://www.adventofcode.com">
          <h2>Advent of Code!</h2>
        </a>
        <p>Compete against other BYU students by participating in Advent of Code. This is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels that can be solved in any programming language you like. The top 5 BYU students will get a free t-shirt at the ACM opening social for Winter 2020 semester! Use the access code <b>823745-b1c327c3</b> to join BYU's  <a href="https://adventofcode.com/2019/leaderboard/private">private leaderboard</a>. You must have an account to join a private leaderboard.</p>
      </md-card-content>
      <md-card-media>
        <!-- <a href="https://www.adventofcode.com"> -->
          <!-- <img class="flyer" v-bind:src="flyer"> -->
        <!-- </a> -->
      </md-card-media>
    </md-card>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  data() {
    return {
      semester: "Winter 2020", // Always change every semester
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
