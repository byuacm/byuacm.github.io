<template>

  <div class="leadership-container" >
    <md-card v-for="leader in leadership" v-bind:key="leader.name">
      <md-card-media>
        <img v-bind:src="leader.photo">
      </md-card-media>
      <md-card-header>
        <div class="md-title">{{leader.name}}</div>
        <div class="md-subhead">{{leader.position}}</div>
      </md-card-header>
      <md-card-content>
        <p>{{leader.bio}}</p>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import leadership from "../constants/leadership.js";

export default {
  name: "Leadership",
  data() {
    return {
      leadership
    }
  },
};
</script>

<style scoped>
.leadership-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 1rem;
  justify-content: space-between;
  margin: 0 60px; /*10%;*/
}

.md-card {
  max-width: 300px;
  min-width: 250px;
  margin: 10px auto;
  border-radius: 10px;
}

img {
  border-radius: 10px;
  display: inline;
  margin-right: 10px;
}
</style>
