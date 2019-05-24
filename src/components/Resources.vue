<template>
  <a v-bind:href="resource.link">
    <div class="resources-container">
      <md-card class="resource" v-for="resource in resources" v-bind:key="resources.title">
        <md-card-header>
          <h4 class="md-title">{{resource.title}}</h4>
        </md-card-header>
        <md-card-content>
          <div>{{resource.description}}</div>
        </md-card-content>
      </md-card>
    </div>
  </a>
</template>

<script>
import resources from "../constants/resources.js";
import * as moment from 'moment';
export default {
  data() {
    return {
      resources
    };
  },
};
</script>

<style scoped>
.events-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}
.events-title {
  color: white;
}
.md-card {
  margin-bottom: 30px;
  width: 100%;
}
.md-subhead {
  display: flex;
  flex-direction: row;
}
.md-subhead div {
  margin: 0 20px 0 5px;
}
.md-subhead {
  display: flex;
}
</style>
