<template>
  <div class="events-container">
    <md-card class="event" v-for="event in events" v-bind:key="event.title">
      <md-card-header>
        <h4 class="md-title">{{event.title}}</h4>
        <div class="md-subhead">
          <div>{{event.start.format('lll')}}{{event.end ? ` - ${event.end.format('LT')}` : ''}}</div>
          <div>{{event.location || 'Location TBD'}}</div>
        </div>
      </md-card-header>
      <md-card-content>
        <div>{{event.description}}</div>
        <div v-if="event.signup">
          Sign up
          <a v-bind:href="event.signup">here</a>.
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import events from "../constants/events.js";
import moment from 'moment';

export default {
  data() {
    return {
      events
    };
  },

  /**
   * This sorts the events chronologically. 
   * If an event is one week old to the current date, it's not shown on the page.
   */
  methods: {
    load: function() {
      this.events = this.events
        .filter(a => a.start.isAfter(moment().subtract(1, "week")))
        .sort((a, b) => a.start - b.start);
    }
  },
  created: function() {
    this.load();
  }
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
