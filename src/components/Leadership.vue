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
import axios from "axios";
import leadership from "../constants/leadership.js";
export default {
  name: "Leadership",
  data() {
    return {
      leadership,
    }
  },
};
</script>

<style scoped>
.leadership-container {
  display: grid; /* 1 */
  grid-template-columns: repeat(auto-fill, 275px); /* 2 */
  grid-gap: 1rem; /* 3 */
  justify-content: space-between; /* 4 */
  margin: 0 50px;
}

.md-card {
  width: 250px;
  margin: 10px auto;
  border-radius: 10px;
}

img {
  border-radius: 10px;
  display: inline;
  width: 250px;
  height: 250px;
  margin-right: 10px;
}
</style>
